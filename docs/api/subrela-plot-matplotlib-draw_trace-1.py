import numpy
import matplotlib.pyplot
from subrela.records import from_arrays
from subrela.clustering import get_clusters
from subrela.analysis import get_strong_relevances, get_weak_relevances
from subrela.plot import get_dendrogram_data, get_trace_data
from subrela.plot.matplotlib import draw_dendrogram, draw_trace

scores = from_arrays([[False, False, False, True, True],
                      [True, False, False, True, True],
                      [False, True, False, True, True],
                      [True, True, False, True, True],
                      [False, False, True, True, True],
                      [True, False, True, True, True],
                      [False, True, True, True, True],
                      [True, True, True, True, True]],
                     [0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1., 1.])
X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

Z = get_clusters(X)
leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(
    Z, groups=[0, 5, 6])
sr = get_strong_relevances(scores, Z, clusters=[5])
wr = get_weak_relevances(scores, Z, 5)
trace_data = get_trace_data(node_data, cut_data, sr, wr, tol=0.1)

_, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
draw_dendrogram(ax, leaf_data, tree_data, cut_data)
draw_trace(ax, trace_data)
matplotlib.pyplot.show()