---
layout: page
title: Performers
search: performer
permalink: /performers/
---
{% assign sorted_performers = site.data.performers | sort: "label_eng" %}
{% for performer in sorted_performers %}
  <p>
    <b>
      {% if performer.images %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/performers/{{ performer.pid }}/">
        {{ performer.label_eng }}
      </a>
    </b>
    ({{ performer.label_ka }}) 
  </p>
{% endfor %}
