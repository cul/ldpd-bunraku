---
layout: page
title: Realia
search: realia
permalink: /realia/
---
<ul class='item-list'>
{% for r in site.data.realia %}
  <li>
    <b>
      <i class="fas fa-image"></i>
      <a href="{{ site.baseurl }}/realia/{{ r.pid }}/">{{ r.label_eng }}</a>
    </b>
  </li>
{% endfor %}
</ul>
