---
layout: page
title: Kashira (Puppets)
search: kashira
permalink: /kashira/
---

{% assign sorted_kashira = site.data.kashira | sort: 'label_eng' %}
{% for kash in sorted_kashira %}
  <p>
    <b>
      {% if kash.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/kashira/{{ kash.pid }}/">{{ kash.label_eng }}</a>
    </b>
    {% if kash.label_ka %}({{ kash.label_ka }}){% endif %}
  </p>
{% endfor %}
