import bokeh.models
import bokeh.palettes

from ._tools import (assign_tree_color, check_angle, check_location,
                     check_orientation)


__all__ = ["draw_dendrogram", "draw_node_info", "draw_node_marker",
           "draw_trace"]


def draw_dendrogram(fig, leaf_data, tree_data, cut_data, palette=None,
                    orientation="vertical", tree_kws=None, cut_kws=None):

    DEFAULT_PALETTE = bokeh.palettes.Category10[10]

    is_vertical = check_orientation(orientation)

    tree_kws = dict(tree_kws) if tree_kws is not None else {}
    for kw in ["xs", "ys", "source"]:
        if kw in tree_kws:
            raise ValueError("'tree_kws' must not contain key '{}'".format(kw))
    tree_color = tree_kws.pop("line_color", tree_kws.pop("color", None))
    if tree_color is None:
        tree_color = DEFAULT_PALETTE[0]
        if palette is None:
            palette = DEFAULT_PALETTE[1:]
    else:
        if palette is None:
            palette = DEFAULT_PALETTE

    cut_kws = dict(cut_kws) if cut_kws is not None else {}
    for kw in ["xs", "ys", "source"]:
        if kw in cut_kws:
            raise ValueError("'cut_kws' must not contain key '{}'".format(kw))
    cut_kws.setdefault("line_color", "black")
    cut_kws.setdefault("line_dash", "dashed")

    tree_data = tree_data.copy()
    assign_tree_color(tree_data, palette, tree_color)

    tree_source = bokeh.models.ColumnDataSource(tree_data)
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

    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    for kw in ["x", "y", "source"]:
        if kw in kws:
            raise ValueError("'kws' must not contain key '{}'".format(kw))
    kws.setdefault("color", None)

    source = bokeh.models.ColumnDataSource(node_data)

    args = ("breadth", "height")
    if not is_vertical:
        args = args[::-1]
    scatter = fig.scatter(*args, source=source, **kws)

    return scatter


def draw_node_info(fig, node_data, info, formatter=str, angle=0,
                   location="outer", x_offset=2, y_offset=2,
                   orientation="vertical", kws=None):

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

    data = node_data.copy()
    data["info_text"] = (info.apply(formatter)
                         .reindex(data.index, fill_value=""))

    for side in ["first", "last"]:
        conds = data["side"] == side
        data.loc[conds, "x_offset"] = _get_x_offset(x_offset, location, side,
                                                    is_vertical, is_flipped_x)
        data.loc[conds, "y_offset"] = _get_y_offset(y_offset, location, side,
                                                    is_vertical, is_flipped_y)

    source = bokeh.models.ColumnDataSource(data)

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

    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    if all(kw not in kws for kw in ["line_color", "color"]):
        kws["line_color"] = "black"
    kws.setdefault("line_width", 2)

    source = bokeh.models.ColumnDataSource(trace_data)

    args = ("breadths", "heights")
    if not is_vertical:
        args = args[::-1]
    line = fig.multi_line(*args, source=source, **kws)

    return line


def _get_x_offset(value, location, side, is_vertical, is_flipped_x):

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
