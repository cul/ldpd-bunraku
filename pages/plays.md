---
layout: page
title: Plays
search: play
permalink: /plays/
---

{% assign sorted_plays = site.data.plays | sort: "first_staged" | reverse %}
<ul class='item-list'>
{% for play in sorted_plays %}
  <li>
    <b>
      {% if play.images %}
        <i class="fas fa-image"></i>
      {% else %}
        <i class="fas fa-times"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/plays/{{ play.pid }}/">{{ play.label_eng }}</a>
    </b>
    {% if play.label_ja %}({{ play.label_ja }}) {% endif %}
    {% if play.label_jk %}({{ play.label_ka }}) {% endif %}
  </li>
{% endfor %}
</ul>
