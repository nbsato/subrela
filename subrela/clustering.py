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

"""Tools for agglomerative hierarchical clustering."""

import pandas
import scipy.cluster.hierarchy


__all__ = ["get_clusters", "get_groups", "get_subgroups"]


def get_clusters(X, metric="euclidean", method="single",
                 optimal_ordering=False):
    r"""Perform an agglomerative hierarchical clustering of features.

    Parameters
    ----------
    X : (M, N) numpy.ndarray
        Values of N features for M samples.
    metric : str or callable, optional
        Metric for measuring a distance between two features. Passed to
        ``metric`` parameter of `scipy.cluster.hierarchy.linkage` function.
    method : str, optional
        Linkage method for calculating a distance between two clusters. Passed
        to ``method`` parameter of `scipy.cluster.hierarchy.linkage` function.
    optimal_ordering : bool, optional
        Leaves are reordered if ``True``. Passed to ``optimal_ordering``
        parameter of `scipy.cluster.hierarchy.linkage` function.

    Returns
    -------
    Z : pandas.DataFrame
        Data of clusters and their linkages.

    Notes
    -----
    An index and columns of ``clusters`` are as follows:

        ``clusters.index`` : int
            Index of a cluster.

        ``clusters['children']`` : (2,) list[int]
            Indices of child clusters.

        ``clusters['distance']`` : float
            Distance between child clusters.

        ``clusters['leaves']`` : list[int]
            Indices of features which are descendants of a cluster.

    Clusters 0 to ``N - 1`` correspond to the first to ``N``\ th features.

    Examples
    --------
    >>> import numpy
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> get_clusters(X)
            children  distance           leaves
    cluster                                    
    5         [1, 2]  2.000000           [1, 2]
    6         [3, 4]  4.000000           [3, 4]
    7         [0, 5]  5.099020        [0, 1, 2]
    8         [6, 7]  6.324555  [3, 4, 0, 1, 2]
    """
    Z = scipy.cluster.hierarchy.linkage(X.T, metric=metric, method=method,
                                        optimal_ordering=optimal_ordering)
    n_leaf = len(Z) + 1
    n_cluster = 2*n_leaf - 1
    children = Z[:, [0, 1]].astype(int).tolist()
    distances = Z[:, 2]

    leaves = [None] * len(Z)
    for cluster, chs in enumerate(children, start=n_leaf):
        cs = []
        for i, ch in enumerate(chs):
            if n_leaf <= ch:
                cs.extend(leaves[ch - n_leaf])
            else:
                cs.append(ch)
        leaves[cluster - n_leaf] = cs

    Z = pandas.DataFrame(
        {"children": children, "distance": distances, "leaves": leaves},
        index=pandas.RangeIndex(n_leaf, n_cluster, name="cluster"))

    return Z


def get_groups(Z, threshold):
    """Define groups by a distance threshold.

    Parameters
    ----------
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`
        function.
    threshold : float
        Distance threshold.

    Returns
    -------
    groups : list[int]
        Indices of group clusters.

    Examples
    --------
    >>> import numpy
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)
    >>> Z
            children  distance           leaves
    cluster                                    
    5         [1, 2]  2.000000           [1, 2]
    6         [3, 4]  4.000000           [3, 4]
    7         [0, 5]  5.099020        [0, 1, 2]
    8         [6, 7]  6.324555  [3, 4, 0, 1, 2]
    >>> get_groups(Z, 4.5)
    [0, 5, 6]
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


def get_subgroups(Z, group):
    """List subgroups.

    Parameters
    ----------
    Z : pandas.DataFrame
        Data of clusters returned by `subrela.clustering.get_clusters`
        function.
    group : int
        Index of a group cluster.

    Returns
    -------
    subgroups : list[int]
        Indices of subgroup clusters.

    Examples
    --------
    >>> import numpy
    >>> X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])
    >>> Z = get_clusters(X)
    >>> Z
            children  distance           leaves
    cluster                                    
    5         [1, 2]  2.000000           [1, 2]
    6         [3, 4]  4.000000           [3, 4]
    7         [0, 5]  5.099020        [0, 1, 2]
    8         [6, 7]  6.324555  [3, 4, 0, 1, 2]
    >>> get_subgroups(Z, 7)
    [7, 0, 5, 1, 2]
    """
    subgroups = [group]
    k = 0
    while k < len(subgroups):
        cluster = subgroups[k]
        if cluster in Z.index:
            subgroups.extend(Z.loc[cluster, "children"])
        k += 1

    return subgroups
