---
layout: page
title: Characters
search: character
permalink: /characters/
---
{% assign sorted_characters = site.data.characters | sort: "label_eng" %}
<ul class='item-list'>
{% for character in sorted_characters %}
  <li>
    <b>
      {% if character.images %}
        <i class="fas fa-image"></i>
      {% else %}
        <i class="fas fa-times"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/characters/{{ character.pid }}/">
        {{ character.label_eng }}
      </a>
    </b>
    ({{ character.label_ka }})
    from <i>{{ character.plays.first.label_eng }}</i>
  </li>
{% endfor %}
</ul>
