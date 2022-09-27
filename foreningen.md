---
layout: default
---
# Styrelsen

|||
|-:|:-|
{%- for member in site.data.styrelse %}
|{{ member.fname }} "**{{ member.nick }}**" {{ member.lname }}|&nbsp;{{ member.role }}|
{%- endfor %}

{% include stadgar.md %}