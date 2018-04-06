---
layout: page
title: Plays
search: play
permalink: /plays/
---

{% assign sorted_plays = site.data.plays | sort: "first_staged" | reverse %}
{% for play in sorted_plays %}
  <p>
    <b>
      {% if play.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <i><a href="{{ site.baseurl }}/plays/{{ play.pid }}/">{{ play.label_eng }}</a> </i>
    </b>
    (<i>{{ play.label_ja }}</i> / <i>{{ play.label_ka }}</i>)
  </p>
{% endfor %}
