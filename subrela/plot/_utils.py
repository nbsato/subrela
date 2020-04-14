"""Utilities for visualization tools."""

import itertools

import pandas


__all__ = ["assign_tree_color", "check_angle", "check_location",
           "check_orientation"]


def check_orientation(orientation):
    """Check ``orientation`` parameter and return as `bool`.

    Parameters
    ----------
    orientaion : {'vertical', 'horizontal'}

    Returns
    -------
    is_vertical : bool

    Raises
    ------
    ValueError
    """
    if orientation == "vertical":
        is_vertical = True
    elif orientation == "horizontal":
        is_vertical = False
    else:
        raise ValueError("'orientation' must be 'vertical' or 'horizontal'")

    return is_vertical


def check_angle(angle):
    """Check ``angle`` parameter and return as `int`.

    Parameters
    ----------
    angle : {0, 90, -90}

    Returns
    -------
    int

    Raises
    ------
    ValueError
    """
    if angle not in [0, 90, -90]:
        raise ValueError("'angle' must be 0, 90, or -90")

    return int(angle)


def check_location(location):
    """Check ``location`` parameter and return itself.

    Parameters
    ----------
    location : {'first', 'last', 'inner', 'outer'}

    Returns
    -------
    str

    Raises
    ------
    ValueError
    """
    if location not in ["first", "last", "inner", "outer"]:
        raise ValueError("'location' must be 'first', 'last', 'inner', or "
                         "'outer'")

    return location


def assign_tree_color(tree_data, palette, default_color):
    """Assign colors to tree lines.

    Parameters
    ----------
    tree_data : pandas.DataFrame
    palette : list[str]
    default_color : str

    Notes
    -----
    ``tree_data`` is modified in-place.
    """
    groups = tree_data["group"].copy()
    if not groups.isna().all():
        groups.sort_values(inplace=True)
    groups = groups.unique()

    it = itertools.cycle(palette)
    colors = {group: next(it) for group in groups if not pandas.isna(group)}
    tree_data["color"] = tree_data["group"].map(colors)
    tree_data.fillna({"color": default_color}, inplace=True)
