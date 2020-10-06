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

"""Visualization using Matplotlib."""

import matplotlib.ticker

from ._utils import (assign_tree_color, check_angle, check_location,
                     check_orientation)


__all__ = ["draw_dendrogram", "draw_node_info", "draw_node_marker",
           "draw_trace"]


def draw_dendrogram(ax, leaf_data, tree_data, cut_data, palette=None,
                    orientation="vertical", tree_kws=None, cut_kws=None):
    """Draw a dendrogram.

    Parameters
    ----------
    ax : matplotlib.axes.Axes
        Subplot on which a dendrogram is drawn.
    leaf_data : pandas.DataFrame
        Data of leaves returned by `subrela.plot.get_dendrogram_data` function.
    tree_data : pandas.DataFrame
        Data of tree lines returned by `subrela.plot.get_dendrogram_data`
        function.
    cut_data : pandas.DataFrame
        Data of cut lines returned by `subrela.plot.get_dendrogram_data`
        function.
    palette : list or None, optional
        Color palette for groups. If ``None``, taken from
        ``matplotlib.rcParams['axes.prop_cycle']``.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    tree_kws : dict or None, optional
        Keyword argumsnts passed to `matplotlib.axes.Axes.plot` method for
        drawing tree lines.
    cut_kws : dict or None, optional
        Keyword arguments passed to `matplotlib.axes.Axes.plot` method for
        drawing cut lines.

    Returns
    -------
    tree_lines : list[matplotlib.lines.Line2D]
        Tree lines.
    cut_lines : list[matplotlib.lines.Line2D]
        Cut lines.

    Notes
    -----
    A default color of a tree is ``tree_kws['color']``. If it does not exist,
    ``palette[0]`` is used and group colors are selected from ``palette[1:]``.

    If neither key ``'color'`` nor key ``'c'`` is in ``cut_kws``, ``'k'`` is
    set to ``'color'``. If neither key ``'linestyle'`` nor key ``'ls'`` is in
    ``cut_kws``, ``'--'`` is set to ``'linestyle'``.

    Examples
    --------
    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       matplotlib.pyplot.show()

    Change colors:

    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data, palette=['m', 'c'])
       matplotlib.pyplot.show()

    Draw horizontally:

    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data,
                       orientation='horizontal')
       matplotlib.pyplot.show()
    """
    is_vertical = check_orientation(orientation)

    tree_kws = dict(tree_kws) if tree_kws is not None else {}
    tree_color = tree_kws.pop("color", None)
    default_palette = [prop["color"]
                       for prop in matplotlib.rcParams["axes.prop_cycle"]]
    if tree_color is None:
        tree_color = default_palette[0]
        if palette is None:
            palette = default_palette[1:]
    else:
        if palette is None:
            palette = default_palette

    cut_kws = dict(cut_kws) if cut_kws is not None else {}
    if all(kw not in cut_kws for kw in ["color", "c"]):
        cut_kws["color"] = "k"
    if all(kw not in cut_kws for kw in ["linestyle", "ls"]):
        cut_kws.setdefault("linestyle", "--")

    tree_data = tree_data.sort_values("cluster")
    assign_tree_color(tree_data, palette, tree_color)
    tree_data.sort_values("cluster", ascending=False, inplace=True)

    baxis = ax.xaxis if is_vertical else ax.yaxis
    baxis.major.locator = matplotlib.ticker.FixedLocator(
        leaf_data["breadth"].to_list())
    baxis.major.formatter = matplotlib.ticker.FixedFormatter(
        leaf_data["label"].to_list())

    xs, ys = tree_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    tree_lines = [ax.plot(x, y, color=color, **tree_kws)[0]
                  for x, y, color in zip(xs, ys, tree_data["color"])]

    xs, ys = cut_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    cut_lines = [ax.plot(x, y, **cut_kws)[0] for x, y in zip(xs, ys)]

    return tree_lines, cut_lines


def draw_node_marker(ax, node_data, orientation="vertical", kws=None):
    """Draw markers of nodes.

    Parameters
    ----------
    ax : matplotlib.axes.Axes
        Subplot on which markers are drawn.
    node_data : pandas.DataFrame
        Data of nodes returned by `subrela.plot.get_dendrogram_data` function.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `matplotlib.axes.Axes.scatter` method.

    Returns
    -------
    scatter : matplotlib.collections.PathCollection
        Markers.

    Notes
    -----
    The default value for ``kws['marker']`` is ``'none'``.

    Examples
    --------
    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram, draw_node_marker

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       draw_node_marker(ax, node_data, kws={'marker': 'o'})
       matplotlib.pyplot.show()
    """
    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    kws.setdefault("marker", "none")

    x, y = node_data[["breadth", "height"]].to_numpy().T
    if not is_vertical:
        x, y = y, x
    scatter = ax.scatter(x, y, **kws)

    return scatter


def draw_node_info(ax, node_data, info, formatter=str, angle=0,
                   location="outer", x_offset=2, y_offset=2,
                   orientation="vertical", kws=None):
    """Draw node information as texts.

    Parameters
    ----------
    ax : matplotlib.axes.Axes
        Subplot on which texts are drawn.
    node_data : pandas.DataFrame
        Data of nodes returned by `subrela.plot.get_dendrogram_data` function.
    info : pandas.Series
        Node information. Its index is a cluster index.
    formatter : callable, optional
        Function for converting a value of ``info`` into `str`.
    angle : {0, 90, -90}, optional
        Angle of a text from the x axis in degrees.
    location : {'first', 'last', 'inner', 'outer'}, optional
        Side on which a text is located. If 'first' and 'last', a text is
        located on the side near to the first and the last leaf, respectively.
        If 'inner', and 'outer', a text is located on the side near to and far
        from a parent node, respectively.
    x_offset : float, optional
        Offset from a tree line along the x axis in pixels.
    y_offset : float, optional
        Offset from a tree line along the y axis in pixels.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `matplotlib.axes.Axes.annotate` method.

    Returns
    -------
    texts : list[matplotlib.text.Annotation]
        Texts of nodes.

    Raises
    ------
    ValueError
        If ``kws`` contains key ``'xytext'``, ``'textcoords'``,
        ``'horizontalalignment'``, ``'verticalalignment'``, ``'rotation'``, and
        ``'rotation_mode'``.

    Examples
    --------
    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       draw_node_info(ax, node_data, node_data['height'])
       matplotlib.pyplot.show()

    Change a format of texts:

    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       draw_node_info(ax, node_data, node_data['height'],
                      formatter='{:.1f}'.format)
       matplotlib.pyplot.show()

    Rotate texts:

    .. plot::

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
       for ax, angle in zip(axes.flat, [90, -90, 0]):
           ax.set_title('angle = {}'.format(angle))
           draw_dendrogram(ax, leaf_data, tree_data, cut_data)
           draw_node_info(ax, node_data, node_data['height'],
                          formatter='{:.1f}'.format, angle=angle)
       axes[1, 1].set_visible(False)
       matplotlib.pyplot.show()

    Change locations of texts:

    .. plot::

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

    Offset texts:

    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.matplotlib import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       draw_node_info(ax, node_data, node_data['height'],
                      formatter='{:.1f}'.format, x_offset=5, y_offset=10)
       matplotlib.pyplot.show()
    """
    angle = check_angle(angle)
    location = check_location(location)
    is_vertical = check_orientation(orientation)
    is_flipped_x = ax.xaxis_inverted()
    is_flipped_y = ax.yaxis_inverted()

    kws = dict(kws) if kws is not None else {}
    for kw in ["xytext", "textcoords", "horizontalalignment",
               "verticalalignment", "rotation", "rotation_mode"]:
        if kw in kws:
            raise ValueError("'kws' must not contain key '{}'".format(kw))

    data = node_data.copy()
    data["info_text"] = (info.apply(formatter)
                         .reindex(data.index, fill_value=""))

    for side in ["first", "last"]:
        conds = data["side"] == side
        data.loc[conds, "x_offset"] = _get_x_offset(x_offset, location, side,
                                                    is_vertical, is_flipped_x)
        data.loc[conds, "y_offset"] = _get_y_offset(y_offset, location, side,
                                                    is_vertical, is_flipped_y)

    texts = []
    for side in ["first", "last"]:
        subdata = data.loc[data["side"] == side]
        xs, ys = subdata[["breadth", "height"]].to_numpy().T
        if not is_vertical:
            xs, ys = ys, xs
        horizontalalignment = _get_horizontalalignment(
            angle, location, side, is_vertical, is_flipped_x, is_flipped_y)
        verticalalignment = _get_verticalalignment(
            angle, location, side, is_vertical, is_flipped_x, is_flipped_y)
        texts.extend(ax.annotate(text, (x, y), xytext=xytext,
                                 textcoords="offset pixels",
                                 horizontalalignment=horizontalalignment,
                                 verticalalignment=verticalalignment,
                                 rotation=angle, rotation_mode="anchor", **kws)
                     for text, x, y, xytext in zip(
                         subdata["info_text"], xs, ys,
                         subdata[["x_offset", "y_offset"]].to_numpy()))

    return texts


def draw_trace(ax, trace_data, orientation="vertical", kws=None):
    """Draw trace lines.

    Parameters
    ----------
    ax : matplotlib.axes.Axes
        Subplot on which trace lines are drawn.
    trace_data : pandas.DataFrame
        Data of trace lines returned by `subrela.plot.get_trace_data` function.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `matplotlib.axes.Axes.plot` method.

    Returns
    -------
    lines : list[matplotlib.lines.Line2D]
        Trace lines.

    Notes
    -----
    If neither key ``'color'`` nor key ``'c'`` is in ``kws``, ``'k'`` is set to
    ``'color'``. If neither key ``'linewidth'`` nor key ``'lw'`` is in ``kws``,
    ``2`` is set to ``'linewidth'``.

    Examples
    --------
    .. plot::

       import numpy
       import matplotlib.pyplot
       from subrela.records import from_arrays
       from subrela.clustering import get_clusters
       from subrela.analysis import (get_strong_relevance_scores,
                                     get_weak_relevance_scores)
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
       srs = get_strong_relevance_scores(scores, Z, clusters=[5])
       wrs = get_weak_relevance_scores(scores, Z, 5)
       trace_data = get_trace_data(node_data, cut_data, srs, wrs, tol=0.1)

       _, ax = matplotlib.pyplot.subplots(figsize=(4, 4))
       draw_dendrogram(ax, leaf_data, tree_data, cut_data)
       draw_trace(ax, trace_data)
       matplotlib.pyplot.show()
    """
    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    if all(kw not in kws for kw in ["color", "c"]):
        kws["color"] = "k"
    if all(kw not in kws for kw in ["linewidth", "lw"]):
        kws["linewidth"] = 2

    xs, ys = trace_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    lines = [ax.plot(x, y, **kws)[0] for x, y in zip(xs, ys)]

    return lines


def _get_x_offset(value, location, side, is_vertical, is_flipped_x):
    """Return an offset along the x axis.

    Parameters
    ----------
    value : float
    location : {'first', 'last', 'inner', 'outer'}
    side : {'first', 'last'}
    is_vertical : bool
    is_flipped_x : bool

    Returns
    -------
    float
    """
    if is_vertical:
        if is_flipped_x:
            if (location == "last"
                    or (side == "first" and location == "inner")
                    or (side == "last" and location == "outer")):
                value = -value
        else:
            if (location == "first"
                    or (side == "first" and location == "outer")
                    or (side == "last" and location == "inner")):
                value = -value
    else:
        if is_flipped_x:
            value = -value

    return value


def _get_y_offset(value, location, side, is_vertical, is_flipped_y):
    """Return an offset along the y axis.

    Parameters
    ----------
    value : float
    location : {'first', 'last', 'inner', 'outer'}
    side : {'first', 'last'}
    is_vertical : bool
    is_flipped_y : bool

    Returns
    -------
    float
    """
    if is_vertical:
        if is_flipped_y:
            value = -value
    else:
        if is_flipped_y:
            if (location == "last"
                    or (side == "first" and location == "inner")
                    or (side == "last" and location == "outer")):
                value = -value
        else:
            if (location == "first"
                    or (side == "first" and location == "outer")
                    or (side == "last" and location == "inner")):
                value = -value

    return value


def _get_horizontalalignment(angle, location, side, is_vertical, is_flipped_x,
                             is_flipped_y):
    """Return horizontal alignment of a text.

    Parameters
    ----------
    angle : {0, 90, -90}
    location : {'first', 'last', 'inner', 'outer'}
    side : {'first', 'last'}
    is_vertical : bool
    is_flipped_x : bool
    is_flipped_y : bool

    Returns
    -------
    {'left', 'right'}
    """
    if is_vertical:
        if angle == 0:
            if is_flipped_x:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "left"
                else:
                    return "right"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "left"
                else:
                    return "right"
        elif angle == 90:
            if is_flipped_y:
                return "right"
            else:
                return "left"
        elif angle == -90:
            if is_flipped_y:
                return "left"
            else:
                return "right"
    else:
        if angle == 0:
            if is_flipped_x:
                return "right"
            else:
                return "left"
        elif angle == 90:
            if is_flipped_y:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "left"
                else:
                    return "right"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "left"
                else:
                    return "right"
        elif angle == -90:
            if is_flipped_y:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "left"
                else:
                    return "right"
            else:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "left"
                else:
                    return "right"


def _get_verticalalignment(angle, location, side, is_vertical, is_flipped_x,
                           is_flipped_y):
    """Return vertical alignment along the y axis.

    Parameters
    ----------
    angle : {0, 90, -90}
    location : {'first', 'last', 'inner', 'outer'}
    side : {'first', 'last'}
    is_vertical : bool
    is_flipped_x : bool
    is_flipped_y : bool

    Returns
    {'baseline', 'top'}
    """
    if is_vertical:
        if angle == 0:
            if is_flipped_y:
                return "top"
            else:
                return "baseline"
        elif angle == 90:
            if is_flipped_x:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "baseline"
                else:
                    return "top"
            else:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "baseline"
                else:
                    return "top"
        elif angle == -90:
            if is_flipped_x:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "baseline"
                else:
                    return "top"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "baseline"
                else:
                    return "top"
    else:
        if angle == 0:
            if is_flipped_y:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "baseline"
                else:
                    return "top"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "baseline"
                else:
                    return "top"
        elif angle == 90:
            if is_flipped_x:
                return "baseline"
            else:
                return "top"
        elif angle == -90:
            if is_flipped_x:
                return "top"
            else:
                return "baseline"
