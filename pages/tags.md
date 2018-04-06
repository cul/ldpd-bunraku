---
layout: page
title: Image Tags
permalink: /tags/
---
{% for tag in site.data.tags %}
  <p>
    <b>
      {% if tag.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/tags/{{ tag.pid }}/">{{ tag.label_eng }}</a>
    </b>
    ({{ tag.label_ka }})
  </p>
{% endfor %}
