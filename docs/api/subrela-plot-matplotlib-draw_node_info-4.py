import numpy
import matplotlib.pyplot
from subrela.clustering import get_clusters
from subrela.plot import get_dendrogram_data
from subrela.plot.matplotlib import draw_dendrogram, draw_node_info

X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

Z = get_clusters(X)
leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

_, axes = matplotlib.pyplot.subplots(nrows=2, ncols=2,
                                     figsize=(7.5, 7.5))
for ax, location in zip(axes.flat, ['first', 'last', 'inner', 'outer']):
    ax.set_title('location = "{}"'.format(location))
    draw_dendrogram(ax, leaf_data, tree_data, cut_data)
    draw_node_info(ax, node_data, node_data['height'],
                   formatter='{:.1f}'.format, location=location)
matplotlib.pyplot.show()