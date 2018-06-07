---
layout: page
title: Image Tags
permalink: /tags/
---
<ul class='item-list'>
{% for tag in site.data.tags %}
  <li>
    <b>
      <i class="fas fa-image"></i>&nbsp;
      <a href="{{ site.baseurl }}/tags/{{ tag.pid }}/">{{ tag.label_eng }}</a>
    </b>
    ({{ tag.label_ka }})
  </li>
{% endfor %}
</ul>
