---
layout: page
title: Performances
permalink: /performances/
---
{% assign performances = site.data.performances | sort: 'seq_chron' %}
<ul class='item-list'>
{% for performance in performances %}
  <li>
    <b>
    {% if performance.images %}
      <i class="fas fa-image"></i>
    {% else %}
      <i class="fas fa-times"></i>
    {% endif %}
    <a href="{{ site.baseurl }}/performances/{{ performance.pid }}/">{{ performance.label_eng }}</a>
  </li>
</p>
{% endfor %}
</ul>
