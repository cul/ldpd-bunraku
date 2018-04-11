---
layout: page
title: Performances
permalink: /performances/
---
{% assign performances = site.data.performances | sort: 'seq_chron' %}
{% for performance in performances %}
  <p>
    <b>
    {% if performance.images %}
      <i class="fa fa-file-image-o" aria-hidden="true"></i>
    {% else %}
      <i class="fa fa-times" aria-hidden="true"></i>
    {% endif %}
    <a href="{{ site.baseurl }}/performances/{{ performance.pid }}/">{{ performance.label_eng }}</a>
  </b>
</p>
{% endfor %}
