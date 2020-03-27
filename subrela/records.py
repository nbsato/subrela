import itertools

import pandas


__all__ = ["add_features", "from_arrays", "integrate", "iterate_missing",
           "n_missing", "remove_features"]


def from_arrays(flags, scores, features=None):

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

    for feature in features:
        if feature in s.index.names:
            raise ValueError("feature '{}' already exists".format(feature))

    s = s.copy()

    flags = s.index.to_frame()
    flags = flags.assign(**{feature: False for feature in features})
    s.index = pandas.MultiIndex.from_frame(flags)

    return s


def remove_features(s, features):

    for feature in features:
        if feature not in s.index.names:
            raise ValueError("feature '{}' does not exist".format(feature))

    flags = s.index.to_frame().astype(bool)
    conds = (~flags[list(features)]).all(axis="columns")
    s = s[conds]

    s = s.droplevel(features)

    return s


def n_missing(s):

    return 2**s.index.nlevels - 1 - len(s)


def iterate_missing(s):

    for flags in itertools.product([False, True], repeat=s.index.nlevels):
        if all(not flag for flag in flags):
            continue
        flags = flags[::-1]
        if flags not in s.index:
            yield flags
