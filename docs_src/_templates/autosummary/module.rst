{{ (fullname ~ " module") | escape | underline }}

.. automodule:: {{ fullname }}
{% if functions %}
Functions
---------

.. autosummary::
   :toctree:
{% for item in functions %}
   ~{{ fullname }}.{{ item }}
{%- endfor %}
{% endif %}
