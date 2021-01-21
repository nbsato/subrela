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

"""Visualization using Bokeh."""

import bokeh.models
import bokeh.palettes

from ._utils import (assign_tree_color, check_angle, check_location,
                     check_orientation)


__all__ = ["draw_dendrogram", "draw_node_info", "draw_node_marker",
           "draw_trace"]


def draw_dendrogram(fig, leaf_data, tree_data, cut_data, palette=None,
                    orientation="vertical", tree_kws=None, cut_kws=None):
    """Draw a dendrogram.

    Parameters
    ----------
    fig : bokeh.plotting.figure.Figure
        Figure on which a dendrogram is drawn.
    leaf_data : pandas.DataFrame
        Data of leaves returned by `subrela.plot.get_dendrogram_data` function.
    tree_data : pandas.DataFrame
        Data of tree lines returned by `subrela.plot.get_dendrogram_data`
        function.
    cut_data : pandas.DataFrame
        Data of cut lines returned by `subrela.plot.get_dendrogram_data`
        function.
    palette : list[str] or None, optional
        Color palette for groups. If ``None``,
        ``bokeh.palettes.Category10[10]`` is used.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    tree_kws : dict or None, optional
        Keyword argumsnts passed to `bokeh.plotting.Figure.multi_line` method
        for drawing tree lines.
    cut_kws : dict or None, optional
        Keyword arguments passed to `bokeh.plotting.Figure.multi_line` method
        for drawing cut lines.

    Returns
    -------
    tree_line : bokeh.models.renderers.GlyphRenderer
        Renderer for tree lines.
    cut_line : bokeh.models.renderers.GlyphRenderer
        Renderer for cut lines.

    Raises
    ------
    ValueError
        If ``tree_kws`` contains key ``'xs'``, ``'ys'``, and ``'source'``. If
        ``cut_kws`` contains key ``'xs'``, ``'ys'``, and ``'source'``.

    Notes
    -----
    A default color of a tree is ``tree_kws['line_color']``. If it does not
    exist, ``tree_kws['color']`` is used. If both do not exist, ``palette[0]``
    is used and group colors are selected from ``palette[1:]``.

    If neither key ``'line_color'`` nor key ``'color'`` is in ``cut_kws``,
    ``'black'`` is set to ``'line_color'``. The default value for
    ``cut_kws['line_dash']`` is ``'dashed'``.

    Examples
    --------
    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       bokeh.io.show(fig)

    Change colors:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data,
                       palette=['magenta', 'cyan'])
       bokeh.io.show(fig)

    Draw horizontally:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, _, tree_data, cut_data = get_dendrogram_data(
           Z, groups=[0, 5, 6])

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data,
                       orientation='horizontal')
       bokeh.io.show(fig)
    """
    is_vertical = check_orientation(orientation)

    tree_kws = dict(tree_kws) if tree_kws is not None else {}
    for kw in ["xs", "ys", "source"]:
        if kw in tree_kws:
            raise ValueError("'tree_kws' must not contain key '{}'".format(kw))
    tree_color = tree_kws.pop("line_color", tree_kws.pop("color", None))
    default_palette = bokeh.palettes.Category10[10]
    if tree_color is None:
        tree_color = default_palette[0]
        if palette is None:
            palette = default_palette[1:]
    else:
        if palette is None:
            palette = default_palette

    cut_kws = dict(cut_kws) if cut_kws is not None else {}
    for kw in ["xs", "ys", "source"]:
        if kw in cut_kws:
            raise ValueError("'cut_kws' must not contain key '{}'".format(kw))
    if not any(kw in cut_kws for kw in ["line_color", "color"]):
        cut_kws.setdefault("line_color", "black")
    cut_kws.setdefault("line_dash", "dashed")

    tree_data = tree_data.sort_values("cluster")
    assign_tree_color(tree_data, palette, tree_color)
    tree_data.sort_values("cluster", ascending=False, inplace=True)
    tree_data = {name: s.to_numpy() for name, s in tree_data.items()}
    tree_source = bokeh.models.ColumnDataSource(tree_data)

    cut_data = cut_data.reset_index()
    cut_data = {name: s.to_numpy() for name, s in cut_data.items()}
    cut_source = bokeh.models.ColumnDataSource(cut_data)

    baxis = fig.xaxis if is_vertical else fig.yaxis
    baxis.ticker = bokeh.models.FixedTicker(
        ticks=leaf_data["breadth"].to_list())
    baxis.major_label_overrides = dict(zip(leaf_data["breadth"].to_list(),
                                           leaf_data["label"]))

    bgrid = fig.xgrid if is_vertical else fig.ygrid
    bgrid.visible = False

    args = ("breadths", "heights")
    if not is_vertical:
        args = args[::-1]
    tree_line = fig.multi_line(*args, line_color="color", source=tree_source,
                               **tree_kws)

    args = ("breadths", "heights")
    if not is_vertical:
        args = args[::-1]
    cut_line = fig.multi_line(*args, source=cut_source, **cut_kws)

    return tree_line, cut_line


def draw_node_marker(fig, node_data, orientation="vertical", kws=None):
    """Draw markers of nodes.

    Parameters
    ----------
    fig : bokeh.plotting.figure.Figure
        Figure on which markers are drawn.
    node_data : pandas.DataFrame
        Data of nodes returned by `subrela.plot.get_dendrogram_data` function.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `bokeh.plotting.figure.Figure.scatter`
        method.

    Returns
    -------
    scatter : bokeh.models.renderers.GlyphRenderer
        Renderer for markers.

    Raises
    ------
    ValueError
        If ``kws`` contains keys ``'x'``, ``'y'``, and ``'source'``.

    Notes
    -----
    The default value for ``kws['color']`` is ``None``.

    Examples
    --------
    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_marker

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       draw_node_marker(fig, node_data, kws={'color': 'red'})
       bokeh.io.show(fig)
    """
    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    for kw in ["x", "y", "source"]:
        if kw in kws:
            raise ValueError("'kws' must not contain key '{}'".format(kw))
    kws.setdefault("color", None)

    node_data = node_data.reset_index()
    node_data = {name: s.to_numpy() for name, s in node_data.items()}
    source = bokeh.models.ColumnDataSource(node_data)

    args = ("breadth", "height")
    if not is_vertical:
        args = args[::-1]
    scatter = fig.scatter(*args, source=source, **kws)

    return scatter


def draw_node_info(fig, node_data, info, formatter=str, angle=0,
                   location="outer", x_offset=2, y_offset=2,
                   orientation="vertical", kws=None):
    """Draw node information as texts.

    Parameters
    ----------
    fig : bokeh.plotting.figure.Figure
        Figure on which texts are drawn.
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
        Offset from a tree line along the x axis in screen units.
    y_offset : float, optional
        Offset from a tree line along the y axis in screen units.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `bokeh.plotting.figure.Figure.text` method.

    Returns
    -------
    texts : (2,) list[bokeh.models.renderers.GlyphRenderer]
        Renderers for texts of the first and the last sibling nodes.

    Raises
    ------
    ValueError
        If ``kws`` contains key ``'x'``, ``'y'``, ``'text'``, ``'angle'``,
        ``'angle_units`'', ``'x_offset'``, ``'y_offset'``, ``'text_align'``,
        ``'text_baseline'``, ``'source'``, and ``'view'``.

    Examples
    --------
    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       draw_node_info(fig, node_data, node_data['height'])
       bokeh.io.show(fig)

    Change a format of texts:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       draw_node_info(fig, node_data, node_data['height'],
                      formatter='{:.1f}'.format)
       bokeh.io.show(fig)

    Rotate texts:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.layouts
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       figs = []
       for angle in [90, -90, 0]:
           fig = bokeh.plotting.Figure(title='angle = {}'.format(angle),
                                       plot_width=300, plot_height=300)
           draw_dendrogram(fig, leaf_data, tree_data, cut_data)
           draw_node_info(fig, node_data, node_data['height'],
                          formatter='{:.1f}'.format, angle=angle)
           figs.append(fig)
       bokeh.io.show(bokeh.layouts.grid(figs, ncols=2))

    Change locations of texts:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.layouts
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       figs = []
       for location in ['first', 'last', 'inner', 'outer']:
           fig = bokeh.plotting.Figure(
               title='location = "{}"'.format(location),
               plot_width=300, plot_height=300)
           draw_dendrogram(fig, leaf_data, tree_data, cut_data)
           draw_node_info(fig, node_data, node_data['height'],
                          formatter='{:.1f}'.format, location=location)
           figs.append(fig)
       bokeh.io.show(bokeh.layouts.grid(figs, ncols=2))

    Offset texts:

    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.layouts
       import bokeh.io
       from subrela.clustering import get_clusters
       from subrela.plot import get_dendrogram_data
       from subrela.plot.bokeh import draw_dendrogram, draw_node_info

       X = numpy.array([[0, -5, -5, 6, 6], [0, -1, 1, -2, 2]])

       Z = get_clusters(X)
       leaf_data, node_data, tree_data, cut_data = get_dendrogram_data(Z)

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       draw_node_info(fig, node_data, node_data['height'],
                      formatter='{:.1f}'.format, x_offset=5, y_offset=10)
       bokeh.io.show(fig)
    """
    angle = check_angle(angle)
    location = check_location(location)
    is_vertical = check_orientation(orientation)
    if isinstance(fig.x_range, bokeh.models.DataRange1d):
        is_flipped_x = fig.x_range.flipped
    else:
        is_flipped_x = fig.x_range.end < fig.x_range.start
    if isinstance(fig.y_range, bokeh.models.DataRange1d):
        is_flipped_y = fig.y_range.flipped
    else:
        is_flipped_y = fig.y_range.end < fig.y_range.start

    kws = dict(kws) if kws is not None else {}
    for kw in ["x", "y", "text", "angle", "angle_units", "x_offset",
               "y_offset", "text_align", "text_baseline", "source", "view"]:
        if kw in kws:
            raise ValueError("'kws' must not contain key '{}'".format(kw))

    node_data = node_data.copy()
    node_data["info_text"] = (info.apply(formatter)
                              .reindex(node_data.index, fill_value=""))
    for side in ["first", "last"]:
        conds = node_data["side"] == side
        node_data.loc[conds, "x_offset"] = _get_x_offset(
            x_offset, location, side, is_vertical, is_flipped_x)
        node_data.loc[conds, "y_offset"] = _get_y_offset(
            y_offset, location, side, is_vertical, is_flipped_y)
    node_data.reset_index(inplace=True)
    node_data = {name: s.to_numpy() for name, s in node_data.items()}
    source = bokeh.models.ColumnDataSource(node_data)

    texts = []
    args = ("breadth", "height")
    if not is_vertical:
        args = args[::-1]
    for side in ["first", "last"]:
        fltr = bokeh.models.GroupFilter(column_name="side", group=side)
        view = bokeh.models.CDSView(source=source, filters=[fltr])
        text_align = _get_text_align(angle, location, side, is_vertical,
                                     is_flipped_x, is_flipped_y)
        text_baseline = _get_text_baseline(angle, location, side, is_vertical,
                                           is_flipped_x, is_flipped_y)
        text = fig.text(
            *args, text="info_text", angle=angle, angle_units="deg",
            x_offset="x_offset", y_offset="y_offset", text_align=text_align,
            text_baseline=text_baseline, source=source, view=view, **kws)
        texts.append(text)

    return texts


def draw_trace(fig, trace_data, orientation="vertical", kws=None):
    """Draw trace lines.

    Parameters
    ----------
    fig : bokeh.plotting.figure.Figure
        Figure on which trace lines are drawn.
    trace_data : pandas.DataFrame
        Data of trace lines returned by `subrela.plot.get_trace_data` function.
    orientation : {'vertical', 'horizontal'}, optional
        Orientation of a tree. If ``'vertical'``, the height direction of a
        tree corresponds to the y axis. If ``'horizontal'``, it corresponds to
        the x axis.
    kws : dict or None, optional
        Keyword arguments passed to `bokeh.plotting.figure.Figure.multi_line`
        method.

    Returns
    -------
    line : bokeh.models.renderers.GlyphRenderer
        Renderer for trace lines.

    Notes
    -----
    If neither key ``'line_color'`` nor key ``'color'`` is in ``kws``,
    ``'black'`` is set to ``'line_color'``. The default value for
    ``kws['line_width']`` is ``2``.

    Examples
    --------
    .. bokeh-plot::

       import numpy
       import bokeh.plotting
       import bokeh.layouts
       import bokeh.io
       from subrela.records import from_arrays
       from subrela.clustering import get_clusters
       from subrela.analysis import (get_strong_relevance_scores,
                                     get_weak_relevance_scores)
       from subrela.plot import get_dendrogram_data, get_trace_data
       from subrela.plot.bokeh import draw_dendrogram, draw_trace

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
       wrs = get_weak_relevance_scores(scores, Z, 5)
       trace_data = get_trace_data(node_data, cut_data, wrs, tol=0.1)

       fig = bokeh.plotting.Figure(plot_width=300, plot_height=300)
       draw_dendrogram(fig, leaf_data, tree_data, cut_data)
       draw_trace(fig, trace_data)
       bokeh.io.show(fig)
    """
    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    if not any(kw in kws for kw in ["line_color", "color"]):
        kws["line_color"] = "black"
    kws.setdefault("line_width", 2)

    trace_data = {name: s.to_numpy() for name, s in trace_data.items()}
    source = bokeh.models.ColumnDataSource(trace_data)

    args = ("breadths", "heights")
    if not is_vertical:
        args = args[::-1]
    line = fig.multi_line(*args, source=source, **kws)

    return line


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
        if not is_flipped_y:
            value = -value
    else:
        if is_flipped_y:
            if (location == "first"
                    or (side == "first" and location == "outer")
                    or (side == "last" and location == "inner")):
                value = -value
        else:
            if (location == "last"
                    or (side == "first" and location == "inner")
                    or (side == "last" and location == "outer")):
                value = -value

    return value


def _get_text_align(angle, location, side, is_vertical, is_flipped_x,
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


def _get_text_baseline(angle, location, side, is_vertical, is_flipped_x,
                       is_flipped_y):
    """Return vertical alignment of a text.

    Parameters
    ----------
    angle : {0, 90, -90}
    location : {'first', 'last', 'inner', 'outer'}
    side : {'first', 'last'}
    is_vertical : bool
    is_flipped_x : bool
    is_flipped_y : bool

    Returns
    {'alphabetic', 'top'}
    """
    if is_vertical:
        if angle == 0:
            if is_flipped_y:
                return "top"
            else:
                return "alphabetic"
        elif angle == 90:
            if is_flipped_x:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "alphabetic"
                else:
                    return "top"
            else:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "alphabetic"
                else:
                    return "top"
        elif angle == -90:
            if is_flipped_x:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "alphabetic"
                else:
                    return "top"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "alphabetic"
                else:
                    return "top"
    else:
        if angle == 0:
            if is_flipped_y:
                if (location == "first"
                        or (side == "first" and location == "outer")
                        or (side == "last" and location == "inner")):
                    return "alphabetic"
                else:
                    return "top"
            else:
                if (location == "last"
                        or (side == "first" and location == "inner")
                        or (side == "last" and location == "outer")):
                    return "alphabetic"
                else:
                    return "top"
        elif angle == 90:
            if is_flipped_x:
                return "alphabetic"
            else:
                return "top"
        elif angle == -90:
            if is_flipped_x:
                return "top"
            else:
                return "alphabetic"
