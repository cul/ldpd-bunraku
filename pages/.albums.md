---
layout: default
title: Albums
permalink: /albums/
---
<style>.paging{display:none !important;}</style>
{% assign albums = site.data.images | where: "media_type", "album page" %}

{% for i in (1..50) %} <!-- there are 50 albums labeled 1-50 -->
  {% assign this_album = albums | where: "series", i | sort: "item_id" | map: "pid" %}
  <h3>Album #{{ i }}</h3>
  <div id ="album-{{ i }}">{% include slider.html list=this_album %}</div>
  {% break %}
{% endfor %}
