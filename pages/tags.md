---
layout: page
title: Image Tags
permalink: /tags/
---
{% for tag in site.data.tags %}
  <p>
    <b>
      <i class="fa fa-file-image-o" aria-hidden="true"></i>&nbsp;
      <a href="{{ site.baseurl }}/tags/{{ tag.pid }}/">{{ tag.label_eng }}</a>
    </b>
    ({{ tag.label_ka }})
  </p>
{% endfor %}
