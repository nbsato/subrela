import itertools

import pandas


__all__ = ["assign_tree_color", "check_angle", "check_location",
           "check_orientation"]


def check_orientation(orientation):

    if orientation == "vertical":
        is_vertical = True
    elif orientation == "horizontal":
        is_vertical = False
    else:
        raise ValueError("'orientation' must be 'vertical' or 'horizontal'")

    return is_vertical


def check_angle(angle):

    if angle not in [0, 90, -90]:
        raise ValueError("'angle' must be 0, 90, or -90")

    return int(angle)


def check_location(location):

    if location not in ["first", "last", "inner", "outer"]:
        raise ValueError("'location' must be 'first', 'last', 'inner', or "
                         "'outer'")

    return location


def assign_tree_color(tree_data, palette, default_color):

    groups = tree_data["group"].copy()
    if not groups.isna().all():
        groups.sort_values(inplace=True)
    groups = groups.unique()

    it = itertools.cycle(palette)
    colors = {group: next(it) if not pandas.isna(group) else default_color
              for group in groups}
    tree_data["color"] = tree_data["group"].map(colors)
