import os
import sys


sys.path.insert(0, os.path.abspath(".."))

project = 'SubRelA'
copyright = '2020, Nobuya Sato'
author = 'Nobuya Sato'

package_name = "subrela"

variables = {}
with open("../{}/version.py".format(package_name), "r") as f:
    exec(f.read(), variables)
release = variables["__version__"]

today_fmt = "%B %d, %Y"

default_role = "obj"

modindex_common_prefix = [package_name + "."]

# extensions
extensions = ["sphinx.ext.autodoc", "sphinx.ext.autosummary",
              "sphinx.ext.githubpages", "sphinx.ext.intersphinx",
              "sphinx.ext.napoleon", "sphinx.ext.viewcode",
              "sphinxcontrib.fulltoc", "bokeh.sphinxext.bokeh_plot",
              "matplotlib.sphinxext.plot_directive"]
# extensions: sphinx.ext.autosummary
autosummary_generate = True
autosummary_generate_overwrite = False
# extensions: sphinx.ext.intersphinx
intersphinx_mapping = {
    "python": ("https://docs.python.org/3/", None),
    "numpy": ("https://docs.scipy.org/doc/numpy/", None),
    "scipy": ("https://docs.scipy.org/doc/scipy/reference/", None),
    "pandas": ("https://pandas.pydata.org/docs/", None),
    "bokeh": ("https://docs.bokeh.org/en/latest", None),
    "matplotlib": ("https://matplotlib.org/", None)}
# extensions: sphinx.ext.napoleon
napoleon_numpy_docstring = True
napoleon_use_rtype = False
napoleon_use_admonition_for_notes = True
# extensions: matplotlib.sphinxext.plot_directive
plot_rcparams = {"figure.autolayout": True}
plot_formats = [("png", 75)]
plot_include_source = True
plot_template = """
{%- for image in images %}
.. figure:: {{ build_dir }}/{{ image.basename }}.{{ default_fmt }}
{%- endfor %}

{{ source_code }}
"""

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# html
html_theme = "bizstyle"
html_short_title = "Home"
html_copy_source = False
