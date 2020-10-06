# Copyright 2020 Nobuya Sato
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tools for handling scores of feature subsets."""

import itertools

import pandas


__all__ = ["add_features", "from_arrays", "integrate", "iterate_missing",
           "n_missing", "remove_features"]


def from_arrays(flags, scores, features=None):
    """Make records of feature subsets from flags and scores.

    Parameters
    ----------
    flags : (M, N) list[list[bool]]
        Used features in subsets. Each row corresponds to a subset. Each
        column corresponds to a feature.
    scores : (M,) list[float]
        Scores for feature subsets.
    features : (N,) list[str] or None, optional
        Feature names. If ``None``, features are named as ``feature_0``,
        ``feature_1``, etc.

    Returns
    -------
    pandas.Series
        Score records.

    Raises
    ------
    ValueError
        If the number of rows in ``flags`` is not equal to the size of
        ``scores``. If the number of columns in ``flags`` is not equal to the
        size of ``features``.

    Notes
    -----
    An index of returned `pandas.Series` is a `pandas.MultiIndex` indicating
    used features. Levels of the index are features.

    Examples
    --------
    >>> from_arrays([[True, False, False], [True, False, True]], [0.2, 0.8])
    feature_0  feature_1  feature_2
    True       False      False        0.2
                          True         0.8
    dtype: float64

    >>> from_arrays([[True, False, False], [True, False, True]], [0.2, 0.8],
    ...             features=['A', 'B', 'C'])
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    """
    flags = list(flags)
    scores = list(scores)

    if features is None:
        features = ["feature_{}".format(i) for i in range(len(flags[0]))]

    if len(flags) != len(scores):
        raise ValueError("number of rows in 'flags' must be equal to size of "
                         "'scores'")
    if not all(len(fs) == len(features) for fs in flags):
        raise ValueError("number of columns in 'flags' must be equal to size "
                         "of 'features'")

    index = pandas.MultiIndex.from_tuples(flags, names=features)

    return pandas.Series(scores, index=index)


def integrate(s1, s2):
    """Integrate two records of feature subsets.

    Parameters
    ----------
    s1 : pandas.Series
        First records.
    s2 : pandas.Series
        Second records.

    Returns
    -------
    pandas.Series
        Integrated records.

    Examples
    --------
    >>> s1 = from_arrays([[True, False]], [0.2], features=['A', 'B'])
    >>> s2 = from_arrays([[False, True]], [0.4], features=['A', 'B'])
    >>> s1
    A     B    
    True  False    0.2
    dtype: float64
    >>> s2
    A      B   
    False  True    0.4
    dtype: float64
    >>> integrate(s1, s2)
    A      B    
    True   False    0.2
    False  True     0.4
    dtype: float64

    >>> s3 = from_arrays([[True, True]], [0.8], features=['A', 'C'])
    >>> s3
    A     C   
    True  True    0.8
    dtype: float64
    >>> integrate(s1, s3)
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    """
    s1 = s1.copy()
    s2 = s2.copy()

    and_features = [feature for feature in s1.index.names
                    if feature in s2.index.names]
    xor1_features = [feature for feature in s1.index.names
                     if feature not in and_features]
    xor2_features = [feature for feature in s2.index.names
                     if feature not in and_features]
    all_features = and_features + xor1_features + xor2_features

    flags = s1.index.to_frame()
    flags = flags.assign(**{feature: False for feature in xor2_features})
    flags = flags[all_features]
    s1.index = pandas.MultiIndex.from_frame(flags)

    flags = s2.index.to_frame()
    flags = flags.assign(**{feature: False for feature in xor1_features})
    flags = flags[all_features]
    s2.index = pandas.MultiIndex.from_frame(flags)

    return pandas.concat([s1, s2], verify_integrity=True)


def add_features(s, features):
    """Add features to records.

    Parameters
    ----------
    s : pandas.Series
        Records of feature subsets.
    features : list[str]
        Names of added features.

    Returns
    -------
    pandas.Series
        New records.

    Raises
    ------
    ValueError
        If a feature in ``features`` already exists.

    See also
    --------
    subrela.records.remove_features : Remove features from records.

    Examples
    --------
    >>> s = from_arrays([[True, False, False], [True, False, True]],
    ...                 [0.2, 0.8],
    ...                 features=['A', 'B', 'C'])
    >>> s
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    >>> add_features(s, ['X', 'Y'])
    A     B      C      X      Y    
    True  False  False  False  False    0.2
                 True   False  False    0.8
    dtype: float64
    """
    for feature in features:
        if feature in s.index.names:
            raise ValueError("feature '{}' already exists".format(feature))

    s = s.copy()

    flags = s.index.to_frame()
    flags = flags.assign(**{feature: False for feature in features})
    s.index = pandas.MultiIndex.from_frame(flags)

    return s


def remove_features(s, features):
    """Remove features from records.

    Parameters
    ----------
    s : pandas.Series
        Records of feature subsets.
    features : list[str]
        Names of removed features.

    Returns
    -------
    pandas.Series
        New records.

    Raises
    ------
    ValueError
        If a feature in ``features`` does not exist.

    See also
    --------
    subrela.records.add_features : Add features to records.

    Notes
    -----
    A record using a removed feature is dropped.

    Examples
    --------
    >>> s = from_arrays([[True, False, False], [True, False, True]],
    ...                 [0.2, 0.8],
    ...                 features=['A', 'B', 'C'])
    >>> s
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    >>> remove_features(s, ['B'])
    A     C    
    True  False    0.2
          True     0.8
    dtype: float64

    >>> remove_features(s, ['B', 'C'])
    A
    True    0.2
    dtype: float64
    """
    for feature in features:
        if feature not in s.index.names:
            raise ValueError("feature '{}' does not exist".format(feature))

    flags = s.index.to_frame().astype(bool)
    conds = (~flags[list(features)]).all(axis="columns")
    s = s[conds]

    s = s.droplevel(features)

    return s


def n_missing(s):
    """Get the number of missing feature subsets.

    Parameters
    ----------
    s : pandas.Series
        Records of feature subsets.

    Returns
    -------
    int

    See also
    --------
    subrela.records.iterate_missing : Iterate missing feature subsets.

    Examples
    --------
    >>> s = from_arrays([[True, False, False], [True, False, True]],
    ...                 [0.2, 0.8],
    ...                 features=['A', 'B', 'C'])
    >>> s
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    >>> n_missing(s)
    5
    """
    return 2**s.index.nlevels - 1 - len(s)


def iterate_missing(s):
    """Iterate missing feature subsets.

    Parameters
    ----------
    s : pandas.Series
        Records of feature subsets.

    Yields
    ------
    flags : tuple[bool]
        Used features for a subset.

    See also
    --------
    subrela.records.n_missing : Get the number of missing feature subsets.

    Examples
    --------
    >>> s = from_arrays([[True, False, False], [True, False, True]],
    ...                 [0.2, 0.8],
    ...                 features=['A', 'B', 'C'])
    >>> s
    A     B      C    
    True  False  False    0.2
                 True     0.8
    dtype: float64
    >>> for flags in iterate_missing(s):
    ...     print(flags)
    ...
    (False, True, False)
    (True, True, False)
    (False, False, True)
    (False, True, True)
    (True, True, True)
    """
    for flags in itertools.product([False, True], repeat=s.index.nlevels):
        if all(not flag for flag in flags):
            continue
        flags = flags[::-1]
        if flags not in s.index:
            yield flags
