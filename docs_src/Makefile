# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS         ?=
SPHINXBUILD        ?= sphinx-build
SOURCEDIR          = .
BUILDDIR           = _build
AUTOGENDIR         = api
AUTOGENSOURCEBASES = subrela.rst subrela.plot.rst
AUTOGENSOURCES     = $(addprefix $(AUTOGENDIR)/,$(AUTOGENSOURCEBASES))

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile autogen-clean

autogen-clean:
	@echo "Removing automatically generated sources under '$(AUTOGENDIR)'..."
	@rm -f $(filter-out $(AUTOGENSOURCES),$(wildcard $(AUTOGENDIR)/*))

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
