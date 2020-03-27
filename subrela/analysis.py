import itertools

import pandas


__all__ = ["get_strong_relevances", "get_subgroups", "get_weak_relevances"]


def get_subgroups(Z, group):

    subgroups = [group]
    k = 0
    while k < len(subgroups):
        cluster = subgroups[k]
        if cluster in Z.index:
            subgroups.extend(Z.loc[cluster, "children"])
        k += 1

    return subgroups


def get_strong_relevances(scores, Z, groups=None, descendants=False):

    if groups is None:
        groups = list(range(Z.index.max() + 1))
    elif descendants:
        groups = list(itertools.chain.from_iterable(
            get_subgroups(Z, group) for group in groups))

    flags = scores.index.to_frame().astype(bool)

    scs = []
    for group in groups:
        i_features = Z.loc[group, "leaves"] if group in Z.index else [group]
        conds = (~flags.iloc[:, i_features]).all(axis="columns")
        score = scores[conds].max()
        scs.append(score)

    df = pandas.DataFrame({"score_ref": scores.max(), "score": scs},
                          index=pandas.Index(groups, name="group"))
    df["relevance"] = df["score_ref"] - df["score"]

    return df


def get_weak_relevances(scores, Z, group, subgroups=None):

    if subgroups is None:
        subgroups = get_subgroups(Z, group)

    i_group_features = Z.loc[group, "leaves"] if group in Z.index else [group]
    i_group_compl_features = [i for i in range(scores.index.nlevels)
                              if i not in i_group_features]

    flags = scores.index.to_frame().astype(bool)
    conds = (~flags.iloc[:, i_group_features]).all(axis="columns")
    score_ref = scores[conds].max()

    scs = []
    for subgroup in subgroups:
        i_subgroup_features = (Z.loc[subgroup, "leaves"] if subgroup in Z.index
                               else [subgroup])
        if not all(i in i_group_features for i in i_subgroup_features):
            raise ValueError("cluster {} in 'subgroups' is not subgroup of "
                             "'group'")
        i_subgroup_compl_features = [i for i in i_group_features
                                     if i not in i_subgroup_features]
        conds = (
            flags.iloc[:, i_group_compl_features].any(axis="columns")
            & (~flags.iloc[:, i_subgroup_compl_features]).all(axis="columns")
            & flags.iloc[:, i_subgroup_features].any(axis="columns"))
        score = scores[conds].max()
        scs.append(score)

    df = pandas.DataFrame({"score": scs, "score_ref": score_ref},
                          index=pandas.Index(subgroups, name="subgroup"))
    df["relevance"] = df["score"] - df["score_ref"]

    return df
