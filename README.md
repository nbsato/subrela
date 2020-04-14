SubRelA
=======

Python package for the subgroup relevance analysis.

Requirements
------------

* [Python][] >= 3.5.3
* [pandas][] >= 0.24.0
* [SciPy][] >= 1.1.0
* [Bokeh][] >= 1.1.0, optional
* [Matplotlib][] >= 2.1.0, optional

[Python]: https://www.python.org/
[pandas]: https://pandas.pydata.org/
[SciPy]: https://www.scipy.org/
[Bokeh]: https://bokeh.org/
[Matplotlib]: https://matplotlib.org/

Installation
------------

Only with mandatory packages:
```shell
pip install git+https://github.com/nbsato/subrela.git
```

With mandatory packages and Bokeh:
```shell
pip install git+https://github.com/nbsato/subrela.git#egg=subrela[bokeh]
```

With mandatory packages and Matplotlib:
```shell
pip install git+https://github.com/nbsato/subrela.git#egg=subrela[matplotlib]
```

With mandatory packages, Bokeh, and Matplotlib:
```shell
pip install git+https://github.com/nbsato/subrela.git#egg=subrela[bokeh,matplotlib]
```

Usage
-----

* [Example codes](docs/example.html)

License
-------

[Apache License, Version 2.0](LICENSE)
