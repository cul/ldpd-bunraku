---
layout: none
---
$(document).ready(function() {
  $.getJSON("{{ '/js/lunr-index.json' | absolute_url}}", function(index_json) {
    var store         = index_json;
    var results_div   = $('#results');
    var search_input  = $('input#search');
    var selected      = [];
    var possible      = ['authors', 'characters', 'kashira', 'performances', 'performers', 'plays', 'productions', 'scenes', 'tags'];
    var index         = new elasticlunr.Index;

    index.saveDocument(false);
    index.setRef('lunr_index');
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
    for (i in store) { index.addDoc(store[i]); }

    // reset with empty results
    results_div.hide();

    // reset search + get selected when checkbox is clicked
    $("input[name='search-field']").on("click", function(event) {
      results_div.empty();
      selected = [];
      $('#checkboxes input:checked').each(function() {
        selected.push($(this).attr('value'));
      });
      console.log(selected);
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
      if (selected.length == 0) { selected = possible; }

      // normalize accents / diacritics
      var query = $(search_input).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      // boost labels
      var params = {
        bool: "AND",
        expand: true
      };

      // get all results
      var prelim_results = index.search(query, params);

      // get results in selected categories
      var real_results = [];
      for (var p in prelim_results) {
        var ref = prelim_results[p].ref;
        var coll = store[ref].collection;
        if (selected.includes(coll)) {
          real_results.push(ref);
        }
      }

      // add + display real results
      results_div.empty();
      results_div.prepend("<span class='search-info'>Displaying " + real_results.length + " results.</span><br><br>");

      // format results by type (string, array, hash)
      function parse(i) {
        if (i instanceof Array) {
          if (i.length > 5) {
            i = i.slice(0,6)
          }
          if (i[0] instanceof Object) {
            items = []
            for (x in i) { items.push(object_parse(i[x])); }
          }
          else {
            items = i;
          }
          return items.join(', ')
        }
        else if (i instanceof Object) { return object_parse(i); }
        else if (typeof i === "string") { return i; }
      }

      function object_parse(i) {
        str = i.label_eng;
        if (i.label_ka) { str += ' (' + i.label_ka + ')'}
        return str;
      }

      // contruct formatted results
      for (var r in real_results) {
        var ref = real_results[r];
        var item = store[ref];
        var link = item.link;
        var label = item.label_eng;
        var type = item.collection.replace(/s\s*$/, '');
        var meta = '';
        if (item.label_ka) { label += ' ('+parse(item.label_ka)+')'; }
        if (item.label_ja) { label += ' ('+parse(item.label_ja)+')'; }
        if (item.category) { meta += '<br>Category: '+parse(item.category); }
        if (item.specialty) { meta += '<br>Specialty: '+parse(item.specialty); }
        if (item.play) { meta += '<br>Play: '+parse(item.play); }
        if (item.production) { meta += '<br>Production: '+parse(item.production); }
        if (item.authors) { meta += '<br>Authors: '+parse(item.authors); }
        if (item.characters) { meta += '<br>Characters: '+parse(item.characters); }
        if (item.kashira) { meta += '<br>Kashira: '+parse(item.kashira); }
        if (item.performances) { meta += '<br>Performances: '+parse(item.performances); }
        if (item.plays) { meta += '<br>Plays: '+parse(item.plays); }
        if (item.productions) { meta += '<br>Productions: '+parse(item.productions); }
        if (item.scenes) { meta += '<br>Scenes: '+parse(item.scenes); }
        var result = '<div class="result"><b><span class="capitalize">' + type + ':</span> <a href="' + link + '">' + label + '</a></b>' + meta + '</div>';
        results_div.append(result);
      }
      // display them
      results_div.show();
    });
  });
});
