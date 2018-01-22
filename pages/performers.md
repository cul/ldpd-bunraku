---
layout: page
title: Performers
search: performer
permalink: /performers/
---
{% assign sorted_performers = site.data.performers | sort: "name" %}
{% for performer in sorted_performers %}
  <p>
    <b>
      {% if performer.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true" style="color:#5498a3"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true" style="color:#9a9d9e"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/performers/{{ performer.id }}">
        {{ performer.name_en }}
      </a>
    </b>
    ({{ performer.name_ka }})
  </p>
{% endfor %}
