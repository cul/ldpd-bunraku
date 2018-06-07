---
layout: page
title: Performers
search: performer
permalink: /performers/
---
{% assign sorted_performers = site.data.performers | sort: "label_eng" %}
<ul class='item-list'>
{% for performer in sorted_performers %}
  <li>
    <b>
      {% if performer.images %}
        <i class="fas fa-image"></i>
      {% else %}
        <i class="fas fa-times"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/performers/{{ performer.pid }}/">
        {{ performer.label_eng }}
      </a>
    </b>
    ({{ performer.label_ka }})
  </li>
{% endfor %}
</ul>
