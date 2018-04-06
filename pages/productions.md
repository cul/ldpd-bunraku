---
layout: page
title: Productions
search: production
permalink: /productions/
---

{% assign productions = site.data.productions | sort: 'seq_chron' %}
{% for production in productions %}
  <p>
    <b>
      {% if production.image_id %}
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
      {% else %}
        <i class="fa fa-times" aria-hidden="true"></i>
      {% endif %}
      <a href="{{ site.baseurl }}/productions/{{ production.pid }}/">{{ production.label_eng }}</a>
    </b>
    {% if production.place !="Others" and production.place !="not recorded"%}
      at the <b>
        {% if production.place == "Asahiza" %}
          <a href="{{ site.baseurl }}/tags/1/">{{ production.place }}</a>
        {% else %}
          {{ production.place }}
        {% endif %}
      </b>
    {% endif %}
</p>
{% endfor %}
