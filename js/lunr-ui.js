---
layout: none
---
$.getJSON("{{ site.baseurl }}/js/lunr-index.json", function(index_json) {
  window.index = new elasticlunr.Index;
  window.store = index_json;
  index.saveDocument(false);
  index.setRef('lunr_id');
  index.addField('pid');
  index.addField('label_eng');
  index.addField('label_ka');
  index.addField('label_ja');
  index.addField('category');
  // add docs
  for (i in store) {
    index.addDoc(store[i]);
  }
  $('input#search').on('keyup', function () {
    var results_div = $('#results');
    var query = $(this).val().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(query);
    var results = index.search(query, {bool: "AND", expand: true});

    results_div.empty();

    if (results.length > 20){results_div.prepend("<p><small>Displaying 20 of " + results.length + " results.</small></p>");}
    for (var r in results.slice(0, 19)) { // limit visible results to 20
      var ref     = results[r].ref;
      var item    = store[ref];
      var link    = item.link;
      var type    = link.match(/\/([^\/]*)\/\d+/i)[1].replace(/s$/, '');
      var eng     = item.label_eng  || '';
      var ka      = item.label_ka   || '';
      var title   = eng + ' ' + ka;
      var result  = '<div class="result"><b>' + type + ':<br><a href="' + link + '">' + title + '</a></b></div>';
      results_div.append(result);
    }
  });
});
