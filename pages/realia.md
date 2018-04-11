---
layout: page
title: Realia
search: realia
permalink: /realia/
---

{% for r in site.data.realia %}
  <p>
    <b>
      <i class="fa fa-file-image-o" aria-hidden="true"></i>
      <a href="{{ site.baseurl }}/realia/{{ r.pid }}/">{{ r.label_eng }}</a>
    </b>
  </p>
{% endfor %}
