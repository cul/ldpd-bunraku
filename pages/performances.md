---
layout: page
title: Performances
permalink: /performances/
---
{% assign performances = site.data.performances | sort: 'seq_chron' %}
{% for performance in performances %}
  <p>
    <b>
    {% if performance.image_id %}
      <i class="fa fa-file-image-o" aria-hidden="true" style="color:#5498a3"></i>
    {% else %}
      <i class="fa fa-times" aria-hidden="true" style="color:#9a9d9e"></i>
    {% endif %}
    <a href="{{ site.baseurl }}/performances/{{ performance.id }}">{{ performance.label_eng }}</a>
  </b>
</p>
{% endfor %}
