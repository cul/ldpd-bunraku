---
layout: null
---
  var idx = lunr(function () {
    this.pipeline.remove(lunr.stopWordFilter)
    this.pipeline.remove(lunr.trimmer)
    this.ref('id')
    this.field('label_eng')
    this.field('label_ka')
    {% assign count = 0 %}
    // authors
    {% for item in site.data.authors %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // characters
    {% for item in site.data.characters %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    //kashira
    {% for item in site.data.kashira %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    //performances
    {% for item in site.data.performances %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // performers
    {% for item in site.data.performers %}
      this.add({
        label_eng: {{ item.name | strip_newlines | jsonify }},
        label_ka: {{ item.name_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // plays
    {% for item in site.data.plays %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // productions
    {% for item in site.data.productions %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // scenes
    {% for item in site.data.pscenes %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
    // tags
    {% for item in site.data.tags %}
      this.add({
        label_eng: {{ item.label_eng | strip_newlines | jsonify }},
        label_ka: {{ item.label_ka | strip_newlines | jsonify }},
        id: {{count}}
      })
      {% assign count = count | plus: 1 %}
    {% endfor %}
  })

  var store = [
    // authors
    {% for item in site.data.authors %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": {{ item.label_ka | strip_newlines | jsonify }},
    "type": "Author",
    "extra": "",
    "link": "{{ site.baseurl }}/authors/{{ item.id }}"
    },{% endfor %}
    // characters
    {% for item in site.data.characters %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": {{ item.label_ka | strip_newlines | jsonify }},
    "type": "Character",
    "extra": {% assign play = site.data.plays | where: 'id', item.play_id[0] | first %}" from <i>{{ play.label_eng }}</i>",
    "link": "{{ site.baseurl }}/characters/{{ item.id }}"
    },{% endfor %}
   // kashira
   {% for item in site.data.kashira %}{
   "label_eng": {{ item.label_eng | jsonify }},
   "label_ka": {{ item.label_ka | jsonify }},
   "type": "Kashira",
   "extra": "",
   "link": "{{ site.baseurl }}/kashira/{{ item.id }}"
  },{% endfor %}
    // performances
    {% for item in site.data.performances %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": "",
    "type": "Performance",
    "extra": "",
    "link": "{{ site.baseurl }}/performances/{{ item.id }}"
    },{% endfor %}
    // performers
    {% for item in site.data.performers %}{
    "label_eng": {{ item.name | strip_newlines | jsonify }},
    "label_ka": {{ item.name_ka | strip_newlines | jsonify }},
    "type": "Performer",
    "extra": "",
    "link": "{{ site.baseurl }}/performers/{{ item.id }}"
    },{% endfor %}
    // plays
    {% for item in site.data.plays %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": {{ item.label_ka | strip_newlines | jsonify }},
    "type": "Play",
    "extra": "",
    "link": "{{ site.baseurl }}/plays/{{ item.id }}"
    },{% endfor %}
    // productions
    {% for item in site.data.productions %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": "",
    "type": "Production",
    "extra": "",
    "link": "{{ site.baseurl }}/productions/{{ item.id }}"
    },{% endfor %}
    // scenes
    {% for item in site.data.pscenes %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": {{ item.label_ka | strip_newlines | jsonify }},
    "extra": {% assign performance = site.data.performances | where: 'id', item.perf_id | first %}" from {{ performance.label_eng }}",
    "type": "Scene",
    "link": "{{ site.baseurl }}/performances/scenes/{{ item.id }}"
    },{% endfor %}
    // tags
    {% for item in site.data.tags %}{
    "label_eng": {{ item.label_eng | strip_newlines | jsonify }},
    "label_ka": {{ item.label_ka | strip_newlines | jsonify }},
    "type": "Image Tag",
    "extra": "",
    "link": "{{ site.baseurl }}/tags/{{ item.id }}"
    }{% unless forloop.last %},{% endunless %}{% endfor %}
  ]

  $(document).ready(function() {
    $('input#search').on('keyup', function () {
      var resultdiv = $('#results');
      var query = $(this).val();
      var result = idx.search(query);
      resultdiv.empty();
      for (var item in result) {
        var ref = result[item].ref;
        var searchitem = '<div class="result"></br><b>'+store[ref].type+':<br/><a href="'+store[ref].link+'" class="post-title" style="font-size:1em;">'+store[ref].label_eng+'</a></b>  '+store[ref].label_ka+store[ref].extra+'</div>';

        resultdiv.append(searchitem);
      }
    });
  });
