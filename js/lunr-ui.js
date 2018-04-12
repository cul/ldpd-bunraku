---
layout: none
---
  $.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(index_json) {
    window.index = new elasticlunr.Index;
    window.store = index_json;
    window.selected = [];
    window.possible = ['authors', 'characters', 'kashira', 'performances', 'performers', 'plays', 'productions', 'scenes', 'tags'];
    window.results_div = $('#results');
    window.search_input = $('input#search');

    results_div.hide();

    index.saveDocument(false);
    index.setRef('lunr_id');
    index.addField('label_eng');
    index.addField('label_ka');
    index.addField('label_ja');
    index.addField('category');
    index.addField('specialty');
    index.addField('production');
    index.addField('play');
    index.addField('collection');
    index.addField('authors');
    index.addField('characters');
    index.addField('kashira');
    index.addField('performances');
    index.addField('plays');
    index.addField('productions');
    index.addField('scenes');

    // add docs
    for (i in store) {
      index.addDoc(store[i]);
    }

    // reset search + get selected when checkbox is clicked
    $("input[name='search-field']").on("click", function(event) {
      results_div.empty();
      selected = [];
      $('#checkboxes input:checked').each(function() {
        selected.push($(this).attr('value'));
      });
    });

    // treat 'enter' as a submit search click
    $('#search').keypress(function(e) {
      var key = e.which;
      if (key == 13) {
        $('#submit').trigger('click');
      }
    });

    // on search click
    $("#submit").on("click", function() {
      // if none selected, consider all possible
      if (selected.length == 0) {
        selected = possible;
      }

      var query = $(search_input).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      var params = {
        bool: "AND",
        expand: true,
        fields: { label_eng: { boost: 1 }, label_ka: { boost: 1 }, label_ja: { boost: 1}}};

      var prelim_results = index.search(query, params);
      var real_results = [];

      // get results in selected categories
      for (var p in prelim_results) {
        var ref = prelim_results[p].ref;
        var coll = store[ref].collection;
        if (selected.includes(coll)) {
          real_results.push(ref);
        }
      }

      // add + display results
      results_div.empty();
      results_div.prepend("<p><small>Displaying " + real_results.length + " results.</small></p>");

      function commify(s) {
        s = s.replace(/||/g, ', ').substring(0, 100);
        return s;
      }

      for (var r in real_results) {
        var ref = real_results[r];
        var item = store[ref];
        var link = item.link;
        var label = item.label_eng;
        var type = item.collection.replace(/s\s*$/, '');
        var meta = '';
        if (item.label_ka) { label += ' ('+item.label_ka+')'; }
        if (item.label_ja) { label += ' ('+item.label_ja+')'; }
        if (item.category) { meta += '<br>Category: '+item.category; }
        if (item.specialty) { meta += '<br>Specialty: '+item.specialty; }
        if (item.play) { meta += '<br>Play: '+item.play; }
        if (item.production) { meta += '<br>Production: '+item.production; }
        if (item.authors) { meta += '<br>Authors: '+commify(item.authors); }
        if (item.characters) { meta += '<br>Characters: '+commify(item.characters); }
        if (item.kashira) { meta += '<br>Kashira: '+commify(item.kashira); }
        if (item.performances) { meta += '<br>Performances: '+commify(item.performances); }
        if (item.plays) { meta += '<br>Plays: '+commify(item.plays); }
        if (item.productions) { meta += '<br>Productions: '+ commify(item.productions); }
        if (item.scenes) { meta += '<br>Scenes: '+commify(item.scenes); }
        var result = '<div class="result"><span class="capitalize">' + type + ':</span><br><b><a href="' + link + '">' + label + '</a></b>' + meta + '</div>';
        results_div.append(result);
      }
      results_div.show();
    });
  });
