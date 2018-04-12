---
layout: none
---
$.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(index_json) {
  window.index = new elasticlunr.Index;
  window.store = index_json;
  window.selected = []
  window.possible = ['authors', 'characters', 'kashira',
                     'performances', 'performers', 'plays',
                     'productions','scenes','tags']
  window.results_div = $('#results');
  window.search_input = $('input#search');

  results_div.hide();

  index.saveDocument(false);
  index.setRef('lunr_id');
  index.addField('pid');
  index.addField('label_eng');
  index.addField('label_ka');
  index.addField('label_ja');
  index.addField('collection');
  index.addField('category');

  // add docs
  for (i in store) { index.addDoc(store[i]); }

  // get selected checkboxes
  $("input[name='search-field']").on( "click", function(event) {
    results_div.empty();
    selected = [];
    $('#checkboxes input:checked').each(function(){
      selected.push($(this).attr('value'));
    });
  });

  // on search click
  $("#submit").on( "click", function() {
    // if none selected, consider all possible
    if (selected.length == 0) { selected = possible; }

    var query = $(search_input).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var prelim_results = index.search(query, {bool: "AND", expand: true});
    var fielded_results = [];

    for (var p in prelim_results) {
      var ref  = prelim_results[p].ref;
      var coll = store[ref].collection;
      if (selected.includes(coll)) { fielded_results.push(ref); }
    }

    results_div.empty();
    results_div.prepend("<p><small>Displaying " + fielded_results.length + " results.</small></p>");

    for (var r in fielded_results) {
      var ref  = fielded_results[r];
      var item = store[ref];
      var coll = item.collection;

      if (selected.includes(coll)) {
        var link  = item.link;
        var label = item.label_eng;
        var type  = coll.replace(/s\s*$/, '');
        var meta  = ''
        if (item.label_ka) { label+=' (' + item.label_ka + ')' }
        if (item.label_ja) { label+=' (' + item.label_ja + ')' }
        if (item.category){ meta += 'Category: '+item.category }
        var result  = '<div class="result"><span class="capitalize">' + type + ':</span><br><b><a href="' + link + '">' + label + '</a></b><br>' + meta + '</div>';
        results_div.append(result);
      }
    }
    results_div.show();
  });
  $('#search').keypress(function (e) {
    var key = e.which;
    if(key == 13) { $('#submit').trigger('click'); }
  });
});
