---
layout: page
title: Authors
search: author
permalink: /authors/
---

{% assign sorted_authors = site.data.authors | sort: "label_eng" %}
{% for author in sorted_authors %}
  <p>
    <b><a href="{{ site.baseurl }}/authors/{{ author.pid }}/">{{ author.label_eng }}</a> </b>
    {% if author.label_ka %}({{ author.label_ka }}){% endif %}
  </p>
{% endfor %}
