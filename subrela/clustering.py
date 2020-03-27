import pandas
import scipy.cluster.hierarchy


__all__ = ["get_clusters"]


def get_clusters(X, metric="euclidean", method="single",
                 optimal_ordering=False):
    """Perform an agglomerative hierarchical clustering of features.

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
    clusters : pandas.DataFrame
        Data of clusters and their linkages.

    Notes
    -----
    An index and columns of ``clusters`` are as follows:

    clusters.index : int
        Index of a cluster.

    clusters['children'] : (2,) list[int]
        Indices of child clusters.

    clusters['distance'] : float
        Distance between child clusters.

    clusters['leaves'] : list[int]
        Indices of features which are descendants of a cluster.
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

    clusters = pandas.DataFrame(
        {"children": children, "distance": distances, "leaves": leaves},
        index=pandas.RangeIndex(n_leaf, n_cluster, name="cluster"))

    return clusters
