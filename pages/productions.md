---
layout: page
title: Productions
search: production
permalink: /productions/
---
{% assign productions = site.data.productions | sort: 'seq_chron' %}
<ul class='item-list'>
{% for production in productions %}
  <li>
    <b>
      {% if production.images %}
        <i class="fas fa-image"></i>
      {% else %}
        <i class="fas fa-times"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/productions/{{ production.pid }}/">{{ production.label_eng }}</a>
    </b>
    {% if production.place !="Others" and production.place !="not recorded"%}
      at the {{ production.place }}
    {% endif %}
</li>
{% endfor %}
<ul>
