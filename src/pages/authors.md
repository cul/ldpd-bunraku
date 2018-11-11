---
layout: page
title: Authors
search: author
permalink: /authors/
---

{% assign sorted_authors = site.data.authors | sort: "label_eng" %}
<ul class='item-list'>
{% for author in sorted_authors %}
  <li>
    <b>
    <i class="fa fa-times" aria-hidden="true"></i>&nbsp;
    <a href="{{ site.baseurl }}/authors/{{ author.pid }}/">{{ author.label_eng }}</a> </b>
    {% if author.label_ka %}({{ author.label_ka }}){% endif %}
  </li>
{% endfor %}
</ul>
