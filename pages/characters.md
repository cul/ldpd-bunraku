---
layout: page
title: Characters
search: character
permalink: /characters/
---
{% assign sorted_characters = site.data.characters | sort: "label_eng" %}
{% for character in sorted_characters %}
  <p>
    <b>
      {% if character.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true" style="color:#5498a3"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true" style="color:#9a9d9e"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/characters/{{ character.id }}">
        {{ character.label_eng }}
      </a>
    </b>
    ({{ character.label_ka }})
    from
    {% assign p_id = character.play_id | first %}
    {% assign play = site.data.plays | where: "id", p_id | first %}
    <a href="{{ site.baseurl }}/plays/{{ p_id }}">
      <b><i>{{ play.label_eng }}</i></b>
    </a>
  </p>
{% endfor %}
