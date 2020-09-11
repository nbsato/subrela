SubRelA documentation
=====================

:Version: |release|
:Release date: |today|

Python package for the subgroup relevance analysis.

Requirements
------------

* `Python <https://www.python.org/>`_ >= 3.6
* `pandas <https://pandas.pydata.org/>`_ >= 0.24.0
* `SciPy <https://www.scipy.org/>`_ >= 1.1.0
* `Bokeh <https://bokeh.org/>`_ >= 1.1.0, optional
* `Matplotlib <https://matplotlib.org/>`_ >= 2.1.0, optional

Installation
------------

Only with mandatory packages:

.. code-block:: shell

   pip install git+https://github.com/nbsato/subrela.git

With mandatory packages and Bokeh:

.. code-block:: shell

   pip install git+https://github.com/nbsato/subrela.git#egg=subrela[bokeh]

With mandatory packages and Matplotlib:

.. code-block:: shell

   pip install git+https://github.com/nbsato/subrela.git#egg=subrela[matplotlib]

With mandatory packages, Bokeh, and Matplotlib:

.. code-block:: shell

   pip install git+https://github.com/nbsato/subrela.git#egg=subrela[bokeh,matplotlib]

Usage
-----

* :doc:`Example codes <example>`

API reference
-------------

* :doc:`Top-level package <api/subrela>`
* :doc:`Whole hierarchy <api_hierarchy>`

License
-------

`Apache License, Version 2.0 <https://www.apache.org/licenses/LICENSE-2.0>`_

.. toctree::
   :hidden:
   :titlesonly:

   example
   api_hierarchy
