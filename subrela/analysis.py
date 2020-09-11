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

"""Tools for analysis."""

import itertools

import pandas

from .clustering import get_subgroups


__all__ = ["get_strong_relevances", "get_weak_relevances"]


def get_strong_relevances(scores, Z, clusters=None, descendants=False):
    """Calculate strong relevance scores of clusters.

    Parameters
    ----------
    scores : pandas.Series
        Scores for feature subsets.
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`
        function.
    clusters : list[int] or None, optional
        Cluster indices whose strong relevance scores are calculated. If
        ``None``, strong relevance scores are calculated for all clusters.
    descendants : bool, optional
        If ``True``, strong relevance scores are calculated also for descendant
        clusters.

    Returns
    -------
    sr : pandas.DataFrame
        Strong relevance scores.

    Notes
    -----
    An index and columns of ``sr`` are as follows:

        ``sr.index`` : int
            Cluster index.

        ``sr['score_ref']`` : float
            Best score among all feature subsets.

        ``sr['score']`` : float
            Best score among feature subsets not including features in a
            cluster.

        ``sr['relevance']`` : float
            Strong relevance score, which is ``sr['score_ref'] - sr['score']``.

    Examples
    --------
    >>> import numpy
    >>> from subrela.records import from_arrays
    >>> from subrela.clustering import get_clusters
    >>> scores = from_arrays([[False, False, False, True, True],
    ...                       [True, False, False, True, True],
    ...                       [False, True, False, True, True],
    ...                       [True, True, False, True, True],
    ...                       [False, False, True, True, True],
    ...                       [True, False, True, True, True],
    ...                       [False, True, True, True, True],
    ...                       [True, True, True, True, True]],
    ...                      [0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1., 1.])
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)
    >>> get_strong_relevances(scores, Z)
             score_ref  score  relevance
    cluster                             
    0              1.0    1.0        0.0
    1              1.0    0.9        0.1
    2              1.0    0.8        0.2
    3              1.0    NaN        NaN
    4              1.0    NaN        NaN
    5              1.0    0.7        0.3
    6              1.0    NaN        NaN
    7              1.0    0.7        0.3
    8              1.0    NaN        NaN

    >>> get_strong_relevances(scores, Z, clusters=[5, 6])
             score_ref  score  relevance
    cluster                             
    5              1.0    0.7        0.3
    6              1.0    NaN        NaN

    >>> get_strong_relevances(scores, Z, clusters=[5, 6], descendants=True)
             score_ref  score  relevance
    cluster                             
    1              1.0    0.9        0.1
    2              1.0    0.8        0.2
    3              1.0    NaN        NaN
    4              1.0    NaN        NaN
    5              1.0    0.7        0.3
    6              1.0    NaN        NaN
    """
    if clusters is None:
        clusters = list(range(Z.index.max() + 1))
    elif descendants:
        clusters = itertools.chain.from_iterable(
            get_subgroups(Z, cluster) for cluster in clusters)
        clusters = list(set(clusters))

    flags = scores.index.to_frame().astype(bool)

    ss = []
    for cluster in clusters:
        i_features = (Z.loc[cluster, "leaves"] if cluster in Z.index
                      else [cluster])
        conds = (~flags.iloc[:, i_features]).all(axis="columns")
        score = scores[conds].max()
        ss.append(score)

    sr = pandas.DataFrame({"score_ref": scores.max(), "score": ss},
                          index=pandas.Index(clusters, name="cluster"))
    sr["relevance"] = sr["score_ref"] - sr["score"]

    return sr


def get_weak_relevances(scores, Z, group, subgroups=None):
    """Calculate weak relevance scores of subgroups.

    Parameters
    ----------
    scores : pandas.Series
        Scores for feature subsets.
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`
        function.
    group : int
        Cluster index of a group.
    subgroups : list[int] or None, optional
        Cluster indices of subgroups whose weak relevance scores are
        calculated. If ``None``, weak relevance scores are calculated for all
        subgroups.

    Returns
    -------
    wr : pandas.DataFrame
        Weak relevance scores.

    Raises
    ------
    ValueError
        If a cluster in ``subgroups`` is not a subgroup of cluster ``group``.

    Notes
    -----
    An index and columns of ``wr`` are as follows:

        ``wr.index`` : int
            Cluster index.

        ``wr['score']`` : float
            Best score among feature subsets icluding at least one feature in a
            subgroup but not including features in a group out of subgroup.

        ``wr['score_ref']`` : float
            Best score among feature subsets not including features in a group.

        ``wr['relevance']`` : float
            Weak relevance score, which is ``wr['score'] - wr['score_ref']``.

    Examples
    --------
    >>> import numpy
    >>> from subrela.records import from_arrays
    >>> from subrela.clustering import get_clusters
    >>> scores = from_arrays([[False, False, False, True, True],
    ...                       [True, False, False, True, True],
    ...                       [False, True, False, True, True],
    ...                       [True, True, False, True, True],
    ...                       [False, False, True, True, True],
    ...                       [True, False, True, True, True],
    ...                       [False, True, True, True, True],
    ...                       [True, True, True, True, True]],
    ...                      [0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1., 1.])
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)
    >>> get_weak_relevances(scores, Z, 5)
              score  score_ref  relevance
    subgroup                             
    5           1.0        0.7        0.3
    1           0.8        0.7        0.1
    2           0.9        0.7        0.2

    >>> get_weak_relevances(scores, Z, 5, subgroups=[1, 2])
              score  score_ref  relevance
    subgroup                             
    1           0.8        0.7        0.1
    2           0.9        0.7        0.2
    """
    if subgroups is None:
        subgroups = get_subgroups(Z, group)

    i_group_features = Z.loc[group, "leaves"] if group in Z.index else [group]

    flags = scores.index.to_frame().astype(bool)
    conds = (~flags.iloc[:, i_group_features]).all(axis="columns")
    score_ref = scores[conds].max()

    ss = []
    for subgroup in subgroups:
        i_subgroup_features = (Z.loc[subgroup, "leaves"] if subgroup in Z.index
                               else [subgroup])
        if not all(i in i_group_features for i in i_subgroup_features):
            raise ValueError("cluster {} in 'subgroups' is not subgroup of "
                             "'group'")
        i_subgroup_compl_features = [i for i in i_group_features
                                     if i not in i_subgroup_features]
        conds = (
            flags.iloc[:, i_subgroup_features].any(axis="columns")
            & (~flags.iloc[:, i_subgroup_compl_features]).all(axis="columns"))
        score = scores[conds].max()
        ss.append(score)

    wr = pandas.DataFrame({"score": ss, "score_ref": score_ref},
                          index=pandas.Index(subgroups, name="subgroup"))
    wr["relevance"] = wr["score"] - wr["score_ref"]

    return wr
