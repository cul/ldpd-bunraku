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
index.addField('plays');
index.addField('label_ja');
index.addField('category');
index.addField('characters');
index.addField('productions');
index.addField('scenes');
index.addField('specialty');
index.addField('authors');
index.addField('kashira');
index.addField('performances');
index.addField('production');
index.addField('play');
// add docs
for (i in store){index.addDoc(store[i]);}
$('input#search').on('keyup', function() {
var results_div = $('#results');
var query = $(this).val();
var results = index.search(query, { boolean: 'AND', expand: true });
results_div.empty();
if (results.length > 10) {
results_div.prepend("<p><small>Displaying 10 of " + results.length + " results.</small></p>");
}
for (var r in results.slice(0, 9)) {
var ref = results[r].ref;
var item = store[ref];var pid = item.pid;
var label_eng = item.label_eng;
var label_ka = item.label_ka;
var plays = item.plays;
var label_ja = item.label_ja;
var category = item.category;
var characters = item.characters;
var productions = item.productions;
var scenes = item.scenes;
var specialty = item.specialty;
var authors = item.authors;
var kashira = item.kashira;
var performances = item.performances;
var production = item.production;
var play = item.play;
var result = '<div class="result"><b><a href="' + item.link + '">' + title + '</a></b></p></div>';
results_div.append(result);
}
});
});