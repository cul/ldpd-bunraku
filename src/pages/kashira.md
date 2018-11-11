---
layout: page
title: Kashira (Puppets)
search: kashira
permalink: /kashira/
---

{% assign sorted_kashira = site.data.kashira | sort: 'label_eng' %}
<ul class='item-list'>
{% for kash in sorted_kashira %}
  <li>
    <b>
      {% if kash.images %}
        <i class="fas fa-image"></i>
      {% else %}
        <i class="fas fa-times"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/kashira/{{ kash.pid }}/">{{ kash.label_eng }}</a>
    </b>
    {% if kash.label_ka %}({{ kash.label_ka }}){% endif %}
  </li>
{% endfor %}
</ul>
