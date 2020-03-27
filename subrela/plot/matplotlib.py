import matplotlib.ticker

from ._tools import (assign_tree_color, check_angle, check_location,
                     check_orientation)


__all__ = ["draw_dendrogram", "draw_node_info", "draw_node_marker",
           "draw_trace"]


def draw_dendrogram(ax, leaf_data, tree_data, cut_data, palette=None,
                    orientation="vertical", tree_kws=None, cut_kws=None):

    DEFAULT_PALETTE = ["C{}".format(i) for i in range(10)]

    is_vertical = check_orientation(orientation)

    tree_kws = dict(tree_kws) if tree_kws is not None else {}
    tree_color = tree_kws.pop("color", None)
    if tree_color is None:
        tree_color = DEFAULT_PALETTE[0]
        if palette is None:
            palette = DEFAULT_PALETTE[1:]
    else:
        if palette is None:
            palette = DEFAULT_PALETTE

    cut_kws = dict(cut_kws) if cut_kws is not None else {}
    if all(kw not in cut_kws for kw in ["color", "c"]):
        cut_kws["color"] = "k"
    if all(kw not in cut_kws for kw in ["linestyle", "ls"]):
        cut_kws.setdefault("linestyle", "--")

    tree_data = tree_data.copy()
    assign_tree_color(tree_data, palette, tree_color)

    baxis = ax.xaxis if is_vertical else ax.yaxis
    baxis.major.locator = matplotlib.ticker.FixedLocator(
        leaf_data["breadth"].to_list())
    baxis.major.formatter = matplotlib.ticker.FixedFormatter(
        leaf_data["label"].to_list())

    xs, ys = tree_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    tree_lines = [ax.plot(x, y, color=color, **tree_kws)
                  for x, y, color in zip(xs, ys, tree_data["color"])]

    xs, ys = cut_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    cut_lines = [ax.plot(x, y, **cut_kws) for x, y in zip(xs, ys)]

    return tree_lines, cut_lines


def draw_node_marker(ax, node_data, orientation="vertical", kws=None):

    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    kws.setdefault("marker", "None")

    x, y = node_data[["breadth", "height"]].to_numpy().T
    if not is_vertical:
        x, y = y, x
    scatter = ax.scatter(x, y, **kws)

    return scatter


def draw_node_info(ax, node_data, info, formatter=str, angle=0,
                   location="outer", x_offset=5, y_offset=5,
                   orientation="vertical", kws=None):

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

    is_vertical = check_orientation(orientation)

    kws = dict(kws) if kws is not None else {}
    if all(kw not in kws for kw in ["color", "c"]):
        kws["color"] = "k"
    if all(kw not in kws for kw in ["linewidth", "lw"]):
        kws["linewidth"] = 2

    xs, ys = trace_data[["breadths", "heights"]].to_numpy().T
    if not is_vertical:
        xs, ys = ys, xs
    lines = [ax.plot(x, y, **kws) for x, y in zip(xs, ys)]

    return lines


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
