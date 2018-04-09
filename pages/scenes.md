---
layout: page
title: Scenes
search: scenes
permalink: /scenes/
---

{% for scene in site.data.sceness %}
  <p>
    <b>
    {% if scene.images %}
      <i class="fa fa-file-image-o" aria-hidden="true"></i>
    {% else %}
      <i class="fa fa-times" aria-hidden="true"></i>
    {% endif %}
    <a href="{{ site.baseurl }}/scenes/{{ scene.pid }}/">{{ scene.label_eng }}</a> </b>
    {% if scene.label_ka %}({{ scene.label_ka }}){% endif %}
  </p>
{% endfor %}
