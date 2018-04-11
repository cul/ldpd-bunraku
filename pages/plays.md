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
      {% if play.images %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/plays/{{ play.pid }}/">{{ play.label_eng }}</a>
    </b>
    {% if play.label_ja %}({{ play.label_ja }}) {% endif %}
    {% if play.label_jk %}({{ play.label_ka }}) {% endif %}
  </p>
{% endfor %}
