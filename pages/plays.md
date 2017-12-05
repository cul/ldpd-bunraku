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
        <i class="fa fa-file-image-o" aria-hidden="true" style="color:#5498a3"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true" style="color:#9a9d9e"></i>
      {% endif %}
      <i><a href="{{ site.baseurl }}/plays/{{ play.id }}">{{ play.label_eng }}</a> </i>
    </b>
    (<i>{{ play.label_ja }}</i> / <i>{{ play.label_ka }}</i>)
  </p>
{% endfor %}