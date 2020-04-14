import setuptools


name = "subrela"

d = {}
with open("{}/version.py".format(name), "r") as f:
    exec(f.read(), d)
version = d["__version__"]

setuptools.setup(
    name=name,
    version=version,
    packages=setuptools.find_packages(),
    python_requires=">= 3.5.3",
    install_requires=["pandas >= 0.24.0",
                      "scipy >= 1.1.0"],
    extras_require={"bokeh": ["bokeh >= 1.1.0"],
                    "matplotlib": ["matplotlib >= 2.1.0"],
                    "test": ["numpy >= 1.12.0"],
                    "doc": ["Sphinx == 2.1.0",
                            "sphinxcontrib-fulltoc == 1.2.0"]},
    description="Tools for the subgroup relevance analysis.",
    author="Nobuya Sato",
    url="https://github.com/nbsato/subrela",
    classifiers=["License :: OSI Approved :: Apache Software License",
                 "Programming Language :: Python :: 3.5",
                 "Programming Language :: Python :: 3.6",
                 "Programming Language :: Python :: 3.7",
                 "Programming Language :: Python :: 3.8",
                 "Topic :: Scientific/Engineering"])
