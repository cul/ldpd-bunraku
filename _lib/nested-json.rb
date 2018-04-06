require 'json'


files = [ 'authors', 'characters', 'images', 'kashira', 'performances', 'performers', 'plays', 'productions', 'scenes' ]

fields = [ 'author_id', 'character_id', 'kashira_id', 'performance_id', 'performer_id', 'play_id', 'production_id', 'scene_id', 'tag_id' ]

files.each do |file|
  data = JSON.load(File.open("_data/#{file}.json"))
  data.each do |d|
    puts d.keys
  end
  break
end
