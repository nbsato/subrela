import itertools

import pandas


__all__ = ["get_dendrogram_data", "get_trace_data"]


def get_dendrogram_data(Z, labels=None, groups=None, cut_bounds_min=0.):
    """Calculate data for drawing a dendrogram.

    Parameters
    ----------
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`.
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
    Indices and columns of returned `pandas.DataFrame`s are as follows:

    - leaf_data
      leaf_data.index : int
          Cluster index. The name is 'leaf'.

      leaf_data['label'] : str
          Labels.

      leaf_data['breadth'] : float
          Positions. along the breadth direction.

    - node_data
      node_data.index : int
          Cluster index. The name is 'cluster'.

      node_data['breadth'] : float
          Positions along the breadth direction.

      node_data['height'] : float
          Positions along the height direction.

      node_data['children'] : (2,) list[int]
          Cluster indices of child nodes.

      node_data['side'] : {'first', 'last'}
          Side in which a node located among sibling nodes. 'first' means that
          its value of the breadth is less than the other. 'last' means that
          its value of the breadth is greater than the other.

      node_data['is_group'] : bool
          ``True`` if a node is a group cluster.

    - tree_data
      tree_data.index
          No meaning.

      tree_data['cluster'] : int
          Cluster index from which a line descends to a child.

      tree_data['side'] : {'first', 'last'}
          Side of a child to which a line descends. 'first' means that a line
          descends to a child whose value of the breadth is less. 'last' means
          that a line descends to a child whose value of the breadth is
          greater.

      tree_data['breadths'] : (3,) list[float]
          Positions of start, corner, and end points along the breadth
          direction.

      tree_data['heights'] : (3,) list[float]
          Positions of start, corner, and end points along the height
          direction.

      tree_data['group'] : int
          Cluster index of a group to which a line belongs.

    - cut_data
      cut_data.index : int
          Cluster index of a group. The name is 'group'.

      cut_data['breadths'] : (2,) list[float]
          Positions of start and end points along the breadth direction.

      cut_data['heights'] : (2,) list[float]
          Positions of start and end points along the height direction.
    """

    if labels is None:
        labels = [str(leaf) for leaf in range(Z.index.min())]

    if groups is None:
        groups = []
    elif pandas.api.types.is_number(groups):
        groups = _get_groups(Z, float(groups))

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


def get_trace_data(node_data, cut_data, strong_relevances, weak_relevances,
                   tol=0.):
    """Calculate data for drawing trace lines.

    Parameters
    ----------
    node_data : pandas.DataFrame
        Data of nodes returned by `subrela.plot.get_dendrogram_data`.
    cut_data : pandas.DataFrame
        Data of cut lines returned by `subrela.plot.get_dendrogram_data`.
    strong_relevances : pandas.Series
        Strong relevances of groups.
    weak_relevances : pandas.Series
        Weak relevances of subgroups.
    tol : float, optional
        Tolerance of difference in the weak relevance from a group.

    Returns
    -------
    trace_data : pandas.DataFrame
        Data of trace lines.

    Notes
    -----
    ``strong_relevances`` and ``weak_relevances`` contain ``float`` values and
    their index are the cluster indices.

    Index and columns of ``trace_data`` are as follows:

    trace_data.index
        No meaning.

    trace_data['breadths']
        Positions of start, corner, and end points along the breadth direction.

    trace_data['heights']
        Positions of start, corner, and end points along the heights direction.

    trace_data['group']
        Cluster index of a group to which a trace line belongs
    """

    groups = node_data.loc[node_data["is_group"]].index

    gs = []
    breadths = []
    heights = []
    for group in groups:
        traces = _get_traces(node_data, group)
        if group not in strong_relevances.index:
            continue
        if group not in weak_relevances.index:
            continue
        group_sr = strong_relevances.loc[group, "relevance"]
        group_wr = weak_relevances.loc[group, "relevance"]
        if group_wr < group_sr:
            continue
        group_b, group_h = node_data.loc[group, ["breadth", "height"]]
        cut_h = cut_data.loc[group, "heights"][0]
        gs.append(group)
        breadths.append([group_b, group_b])
        heights.append([cut_h, group_h])
        for trace in traces:
            b, h = group_b, group_h
            for cluster in trace[1:]:
                if cluster not in weak_relevances.index:
                    break
                wr = weak_relevances.loc[cluster, "relevance"]
                if tol < group_wr - wr:
                    break
                prev_b, prev_h = b, h
                b, h = node_data.loc[cluster, ["breadth", "height"]]
                gs.append(group)
                breadths.append([prev_b, b, b])
                heights.append([prev_h, prev_h, h])

    trace_data = pandas.DataFrame({"breadths": breadths, "heights": heights,
                                   "group": gs})

    return trace_data


def _get_leaf_data(labels, order):
    """

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
    """

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
    """

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
    """

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


def _get_groups(Z, threshold):
    """

    Parameters
    ----------
    Z : pandas.DataFrame
    threshold : float

    Returns
    -------
    groups : list[int]
    """

    groups = []
    for children, distance in (
            Z[["children", "distance"]].itertuples(index=False)):
        if distance < threshold:
            continue
        for child in children:
            child_distance = (Z.loc[child, "distance"] if child in Z.index
                              else 0.)
            if child_distance < threshold:
                groups.append(child)

    return groups


def _get_cluster_coords(Z, leaf_data):
    """

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


def _get_traces(node_data, group):
    """

    Parameters
    ----------
    node_data : pandas.DataFrame
    group : int

    Returns
    -------
    traces : list[list[int]]
    """

    traces = [[group]]
    k = 0
    while k < len(traces):
        front = traces[k][-1]
        if node_data.loc[front, "children"]:
            traces[k:k+1] = [traces[k] + [child]
                             for child in node_data.loc[front, "children"]]
        else:
            k += 1
            continue

    return traces
