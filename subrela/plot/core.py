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

"""Core tools for visualization."""

import itertools

import pandas


__all__ = ["get_dendrogram_data", "get_trace_data"]


def get_dendrogram_data(Z, labels=None, groups=None, cut_bounds_min=0.):
    """Calculate data for drawing a dendrogram.

    Parameters
    ----------
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`
        function.
    labels : list[str] or None, optional
        Labels of leaves in the order of leaf index. If ``None``, a leaf index
        is used.
    groups : list[int] or None, optional
        Cluster indices of groups. If ``None``, a dendrogram is not separated
        into groups.
    cut_bounds_min : float, optional
        Minimum distance between nodes around a cut line. A cut line is
        splitted to satisfy this condition if possible.

    Returns
    -------
    leaf_data : pandas.DataFrame
        Data of leaves.
    node_data : pandas.DataFrame
        Data of nodes.
    tree_data : pandas.DataFrame
        Data of tree lines.
    cut_data : pandas.DataFrame
        Data of cut lines.

    Raises
    ------
    ValueError
        If clusters in ``groups`` are not disjoint.

    Notes
    -----
    An index and columns of ``leaf_data`` are as follows:

        ``leaf_data.index`` : int
            Cluster index. The name is 'leaf'.

        ``leaf_data['label']`` : str
            Labels.

        ``leaf_data['breadth']`` : float
            Positions. along the breadth direction.

    An index and columns of ``node_data`` are as follows:

        ``node_data.index`` : int
            Cluster index. The name is 'cluster'.

        ``node_data['breadth']`` : float
            Positions along the breadth direction.

        ``node_data['height']`` : float
            Positions along the height direction.

        ``node_data['children']`` : (2,) list[int]
            Cluster indices of child nodes.

        ``node_data['side']`` : {'first', 'last'}
            Side in which a node located among sibling nodes. 'first' means
            that its value of the breadth is less than the other. 'last' means
            that its value of the breadth is greater than the other.

        ``node_data['is_group']`` : bool
            ``True`` if a node is a group cluster.

    An index and columns of ``tree_data`` are as follows:

        ``tree_data.index``
            No meaning.

        ``tree_data['cluster']`` : int
            Cluster index from which a line descends to a child.

        ``tree_data['side']`` : {'first', 'last'}
            Side of a child to which a line descends. 'first' means that a line
            descends to a child whose value of the breadth is less. 'last'
            means that a line descends to a child whose value of the breadth is
            greater.

        ``tree_data['breadths']`` : (3,) list[float]
            Positions of start, corner, and end points along the breadth
            direction.

        ``tree_data['heights']`` : (3,) list[float]
            Positions of start, corner, and end points along the height
            direction.

        ``tree_data['group']`` : int
            Cluster index of a group to which a line belongs.

    An index and columns of ``cut_data`` are as follows:

        ``cut_data.index`` : int
            Cluster index of a group. The name is 'group'.

        ``cut_data['breadths']`` : (2,) list[float]
            Positions of start and end points along the breadth direction.

        ``cut_data['heights']`` : (2,) list[float]
            Positions of start and end points along the height direction.

    Examples
    --------
    >>> import numpy
    >>> from subrela.clustering import get_clusters
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)

    >>> leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)
    >>> leaf_data
         label  breadth
    leaf               
    0        0        2
    1        1        3
    2        2        4
    3        3        0
    4        4        1
    >>> node_data
             breadth    height children   side  is_group
    cluster                                             
    0          2.000  0.000000       []  first     False
    1          3.000  0.000000       []  first     False
    2          4.000  0.000000       []   last     False
    3          0.000  0.000000       []  first     False
    4          1.000  0.000000       []   last     False
    5          3.500  2.000000   [1, 2]   last     False
    6          0.500  4.000000   [3, 4]  first     False
    7          2.750  5.099020   [0, 5]   last     False
    8          1.625  6.324555   [6, 7]   last     False
    >>> tree_data
       cluster   side             breadths                                            heights  group
    0        5  first          [3.5, 3, 3]                                    [2.0, 2.0, 0.0]   <NA>
    1        5   last          [3.5, 4, 4]                                    [2.0, 2.0, 0.0]   <NA>
    2        6  first          [0.5, 0, 0]                                    [4.0, 4.0, 0.0]   <NA>
    3        6   last          [0.5, 1, 1]                                    [4.0, 4.0, 0.0]   <NA>
    4        7  first         [2.75, 2, 2]      [5.0990195135927845, 5.0990195135927845, 0.0]   <NA>
    5        7   last     [2.75, 3.5, 3.5]      [5.0990195135927845, 5.0990195135927845, 2.0]   <NA>
    6        8  first    [1.625, 0.5, 0.5]        [6.324555320336759, 6.324555320336759, 4.0]   <NA>
    7        8   last  [1.625, 2.75, 2.75]  [6.324555320336759, 6.324555320336759, 5.09901...   <NA>
    >>> cut_data
    Empty DataFrame
    Columns: [breadths, heights]
    Index: []

    >>> leaf_data, _, _, _ = get_dendrogram_data(
    ...     Z, labels=['A', 'B', 'C', 'D', 'E'])
    >>> leaf_data
         label  breadth
    leaf               
    0        A        2
    1        B        3
    2        C        4
    3        D        0
    4        E        1

    >>> _, node_data, tree_data, cut_data = get_dendrogram_data(
    ...     Z, groups=[0, 5, 6])
    >>> node_data
             breadth    height children   side  is_group
    cluster                                             
    0          2.000  0.000000       []  first      True
    1          3.000  0.000000       []  first     False
    2          4.000  0.000000       []   last     False
    3          0.000  0.000000       []  first     False
    4          1.000  0.000000       []   last     False
    5          3.500  2.000000   [1, 2]   last      True
    6          0.500  4.000000   [3, 4]  first      True
    7          2.750  5.099020   [0, 5]   last     False
    8          1.625  6.324555   [6, 7]   last     False
    >>> tree_data
       cluster   side             breadths                                            heights  group
    0        5  first          [3.5, 3, 3]                                    [2.0, 2.0, 0.0]      5
    1        5   last          [3.5, 4, 4]                                    [2.0, 2.0, 0.0]      5
    2        6  first          [0.5, 0, 0]                                    [4.0, 4.0, 0.0]      6
    3        6   last          [0.5, 1, 1]                                    [4.0, 4.0, 0.0]      6
    4        7  first         [2.75, 2, 2]      [5.0990195135927845, 5.0990195135927845, 0.0]   <NA>
    5        7   last     [2.75, 3.5, 3.5]      [5.0990195135927845, 5.0990195135927845, 2.0]   <NA>
    6        8  first    [1.625, 0.5, 0.5]        [6.324555320336759, 6.324555320336759, 4.0]   <NA>
    7        8   last  [1.625, 2.75, 2.75]  [6.324555320336759, 6.324555320336759, 5.09901...   <NA>
    >>> cut_data
              breadths                                 heights
    group                                                     
    0       [1.5, 2.5]  [4.549509756796392, 4.549509756796392]
    5       [2.5, 4.5]  [4.549509756796392, 4.549509756796392]
    6      [-0.5, 1.5]  [4.549509756796392, 4.549509756796392]

    >>> _, _, _, cut_data = get_dendrogram_data(
    ...     Z, groups=[0, 5, 6], cut_bounds_min=1.5)
    >>> cut_data
              breadths                                   heights
    group                                                       
    0       [1.5, 2.5]  [3.5495097567963922, 3.5495097567963922]
    5       [2.5, 4.5]  [3.5495097567963922, 3.5495097567963922]
    6      [-0.5, 1.5]      [5.16227766016838, 5.16227766016838]
    """
    if labels is None:
        labels = [str(leaf) for leaf in range(Z.index.min())]

    if groups is None:
        groups = []

    for group1, group2 in itertools.combinations(groups, 2):
        leaves1 = Z.loc[group1, "leaves"] if group1 in Z.index else [group1]
        leaves2 = Z.loc[group2, "leaves"] if group2 in Z.index else [group2]
        if not set(leaves1).isdisjoint(leaves2):
            raise ValueError("clusters {} and {} in 'groups' are not disjoint"
                             .format(group1, group2))

    leaf_data = _get_leaf_data(labels, Z.loc[Z.index.max(), "leaves"])

    coords = _get_cluster_coords(Z, leaf_data)
    ZZ = pandas.concat([Z[["children", "leaves"]], coords], axis="columns")

    node_data = _get_node_data(ZZ, leaf_data, groups)
    tree_data = _get_tree_data(ZZ, leaf_data, groups)
    cut_data = _get_cut_data(ZZ, leaf_data, groups, cut_bounds_min)

    return leaf_data, node_data, tree_data, cut_data


def get_trace_data(node_data, cut_data, wrs, tol=0.):
    """Calculate data for drawing trace lines.

    Parameters
    ----------
    node_data : pandas.DataFrame
        Data of nodes returned by `subrela.plot.get_dendrogram_data` function.
    cut_data : pandas.DataFrame
        Data of cut lines returned by `subrela.plot.get_dendrogram_data`
        function.
    wrs : pandas.DataFrame
        Weak relevance scores of subgroups, which is a concatenation of returns
        of `subrela.analysis.get_weak_relevance_scores` function.
    tol : float, optional
        Tolerance of difference in the relevance score.

    Returns
    -------
    trace_data : pandas.DataFrame
        Data of trace lines.

    Notes
    -----
    An index and columns of ``trace_data`` are as follows:

        ``trace_data.index``
            No meaning.

        ``trace_data['breadths']`` : list[float]
            Positions of start, corner, and end points along the breadth
            direction.

        ``trace_data['heights']`` : list[float]
            Positions of start, corner, and end points along the heights
            direction.

        ``trace_data['group']`` : int
            Cluster index of a group to which a trace line belongs

    Examples
    --------
    >>> import numpy
    >>> from subrela.records import from_arrays
    >>> from subrela.clustering import get_clusters
    >>> from subrela.analysis import get_weak_relevance_scores
    >>> subset_scores = from_arrays([[False, False, False, True, True],
    ...                              [True, False, False, True, True],
    ...                              [False, True, False, True, True],
    ...                              [True, True, False, True, True],
    ...                              [False, False, True, True, True],
    ...                              [True, False, True, True, True],
    ...                              [False, True, True, True, True],
    ...                              [True, True, True, True, True]],
    ...                             [0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1., 1.])
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)
    >>> _, node_data, _, cut_data = get_dendrogram_data(Z, groups=[5])
    >>> wrs = get_weak_relevance_scores(subset_scores, Z, 5)

    >>> get_trace_data(node_data, cut_data, wrs)
              breadths                    heights  group
    0       [3.5, 3.5]  [3.5495097567963922, 2.0]      5
    1  [3.5, 3.0, 3.0]            [2.0, 2.0, 0.0]      5
    2  [3.5, 4.0, 4.0]            [2.0, 2.0, 0.0]      5

    >>> get_trace_data(node_data, cut_data, wrs, tol=0.1)
              breadths                    heights  group
    0       [3.5, 3.5]  [3.5495097567963922, 2.0]      5
    1  [3.5, 4.0, 4.0]            [2.0, 2.0, 0.0]      5
    """
    groups = node_data.loc[node_data["is_group"]].index

    gs = []
    breadths = []
    heights = []
    for group in groups:
        if group not in wrs.index:
            continue
        group_wrs = wrs.loc[group, "relevance_score"]
        if group_wrs < -tol:
            continue
        group_b, group_h = node_data.loc[group, ["breadth", "height"]]
        cut_h = cut_data.loc[group, "heights"][0]
        gs.append(group)
        breadths.append([group_b, group_b])
        heights.append([cut_h, group_h])
        clusters = [group]
        while clusters:
            cluster = clusters.pop(0)
            children = node_data.loc[cluster, "children"]
            if not children:
                continue
            cluster_wrs = wrs.loc[cluster, "relevance_score"]
            children_wrss = wrs.loc[children, "relevance_score"]
            is_decreasing = children_wrss < cluster_wrs - tol
            if (~is_decreasing).any():
                children = is_decreasing.loc[~is_decreasing].index.to_list()
            cluster_b, cluster_h = node_data.loc[cluster,
                                                 ["breadth", "height"]]
            for child in children:
                child_b, child_h = node_data.loc[child, ["breadth", "height"]]
                gs.append(group)
                breadths.append([cluster_b, child_b, child_b])
                heights.append([cluster_h, cluster_h, child_h])
            clusters.extend(children)

    trace_data = pandas.DataFrame({"breadths": breadths, "heights": heights,
                                   "group": gs})

    return trace_data


def _get_leaf_data(labels, order):
    """Return data of leaves.

    Parameters
    ----------
    labels : list[str]
        Labels of leaves in the order of the leaf index.
    order : list[int]
        Positions of leaves in the order of the leaf index.

    Returns
    -------
    df : pandas.DataFrame
    """
    df = pandas.DataFrame({"label": labels},
                          index=pandas.RangeIndex(len(labels), name="leaf"))
    df["breadth"] = pandas.Series(dict(zip(order, range(len(labels)))))

    return df


def _get_node_data(ZZ, leaf_data, groups):
    """Return data of nodes.

    Parameters
    ----------
    ZZ : pandas.DataFrame
    leaf_data : pandas.DataFrame
    groups : list[int]

    Returns
    -------
    df : pandas.DataFrame
    """
    df = leaf_data["breadth"].to_frame()
    df["height"] = 0.
    df["children"] = [[] for _ in range(len(df))]

    df = pandas.concat([df, ZZ[["breadth", "height", "children"]]])
    df.index.name = "cluster"

    df["side"] = [
        "first" if is_first else "last"
        for is_first in df.index.isin(ZZ["children"]
                                      .apply(lambda children: children[0]))]

    df["is_group"] = df.index.isin(groups)

    return df


def _get_tree_data(ZZ, leaf_data, groups):
    """Return data of tree lines.

    Parameters
    ----------
    ZZ : pandas.DataFrame
    leaf_data : pandas.DataFrame
    groups : list[int]

    Returns
    -------
    df : pandas.DataFrame
    """
    ZZ = ZZ.sort_index()

    leaves = ZZ.loc[ZZ.index.isin(groups), "leaves"].apply(set)

    records = []
    for cluster, children, b, h, lvs in (
            ZZ[["children", "breadth", "height", "leaves"]].itertuples()):
        child_bs = [ZZ.loc[child, "breadth"] if child in ZZ.index
                    else leaf_data.loc[child, "breadth"]
                    for child in children]
        child_hs = [ZZ.loc[child, "height"] if child in ZZ.index else 0.
                    for child in children]
        group = next((g for g, ls in leaves.items() if ls.issuperset(lvs)),
                     None)
        records.extend((cluster, side, [b, child_b, child_b], [h, h, child_h],
                        group)
                       for side, child_b, child_h in zip(["first", "last"],
                                                         child_bs, child_hs))

    df = pandas.DataFrame.from_records(records,
                                       columns=["cluster", "side", "breadths",
                                                "heights", "group"])
    df = df.astype({"group": "Int64"})

    return df


def _get_cut_data(ZZ, leaf_data, groups, bounds_min):
    """Return data of cut lines.

    Parameters
    ----------
    ZZ : pandas.DataFrame
    leaf_data : pandas.DataFrame
    groups : list[int]
    bounds_min : float

    Returns
    -------
    df : pandas.DataFrame
    """
    ZZ = ZZ.sort_index()

    groups = [group for group in groups if group != ZZ.index.max()]

    levels = groups.copy()
    height_bounds = []
    for level in levels:
        h = ZZ.loc[level, "height"] if level in ZZ.index else 0.
        parent = (ZZ["children"].apply(lambda children: level in children)
                  .idxmax())
        parent_h = ZZ.loc[parent, "height"]
        height_bounds.append([h, parent_h])
    groups = [[group] for group in groups]

    for cluster, children in ZZ["children"].items():
        if not all(child in levels for child in children):
            continue
        ks = [levels.index(child) for child in children]
        bounds = [height_bounds[k] for k in ks]
        h_min = max(bds[0] for bds in bounds)
        h_max = min(bds[1] for bds in bounds)
        dh = h_max - h_min
        if dh <= 0.:
            continue
        if dh < bounds_min and all(dh < bds[1] - bds[0] for bds in bounds):
            continue
        ks = sorted(ks, reverse=True)
        for k in ks:
            levels.pop(k)
            height_bounds.pop(k)
        levels.append(cluster)
        height_bounds.append([h_min, h_max])
        groups.append(
            list(itertools.chain.from_iterable(groups.pop(k) for k in ks)))
    heights = [sum(bds) / len(bds) for bds in height_bounds]

    heights = itertools.chain.from_iterable(
        [h] * len(gs) for gs, h in zip(groups, heights))
    heights = [[h, h] for h in heights]
    groups = list(itertools.chain.from_iterable(groups))

    breadths = []
    for group in groups:
        leaves = ZZ.loc[group, "leaves"] if group in ZZ.index else [group]
        b_min = leaf_data.loc[leaves[0], "breadth"] - 0.5
        b_max = leaf_data.loc[leaves[-1], "breadth"] + 0.5
        breadths.append([b_min, b_max])

    df = pandas.DataFrame({"breadths": breadths, "heights": heights},
                          index=pandas.Index(groups, name="group"))
    df.sort_index(inplace=True)

    return df


def _get_cluster_coords(Z, leaf_data):
    """Return coordinates of clusters.

    Parameters
    ----------
    z : pandas.DataFrame
    leaf_data : pandas.DataFrame

    Returns
    -------
    pandas.DataFrame
    """
    Z = Z.sort_index()

    breadths = pandas.Series([None] * len(Z), index=Z.index, dtype=float)
    for cluster, children in Z["children"].items():
        bs = [breadths[child] if child in breadths.index
              else leaf_data.loc[child, "breadth"]
              for child in children]
        breadths[cluster] = sum(bs) / len(bs)

    return pandas.DataFrame({"breadth": breadths, "height": Z["distance"]},
                            index=Z.index)
