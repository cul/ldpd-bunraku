spec = Gem::Specification.find_by_name 'wax_tasks'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each {|r| load r}

# D3 tasks
# require 'json'

# namespace :d3 do
#   desc 'generate play dendrogram json'
#   task :dendrogram do
#     plays = JSON.parse(File.read('_data/plays.json'))
#     performances = JSON.parse(File.read('_data/performances.json'))
#     scenes = JSON.parse(File.read('_data/scenes.json'))
#
#     play = plays.find {|i| i['pid'] == '6' }
#
#     play_hash = {
#       :name => play['label_eng'],
#       :url => "{{ 'plays/6/' | relative_url }}",
#       :children => [
#         {
#           :name => 'was written by',
#           :children => []
#         },
#         {
#           :name => 'was performed during',
#           :children => []
#         }
#       ]
#     }
#     play['authors'].each do |a|
#       author_hash = {
#         :name => a['label_eng'],
#         :url => "{{ 'authors/#{a['id']}' | relative_url }}"
#       }
#       play_hash[:children][0][:children] << author_hash
#     end
#
#     play['performances'].each do |p|
#       performance_hash = {
#         :name => p['label_eng'].gsub(/:.*/,''),
#         :url => "{{ 'performances/#{p['id']}' | relative_url }}",
#         :children => [
#           {
#             :name => 'which included the scenes',
#             :children => []
#           }
#         ]
#       }
#       p_ref = performances.find {|i| i['pid'] == p['id'] }
#       p_ref['scenes'].each do |s|
#         scene_hash = {
#           :name => s['label_eng'],
#           :url => "{{ 'scenes/#{s['id']}' | relative_url }}",
#           :children => [
#             {
#               :name => 'with narration by',
#               :children => []
#             },
#             {
#               :name => 'with music by',
#               :children => []
#             },
#             {
#               :name => 'with performances by',
#               :children => []
#             }
#           ]
#         }
#         s_ref = scenes.find {|i| i['pid'] == s['id'] }
#         s_ref['narrators'].each do |n|
#           narrator_hash = {
#             :name => n['label_eng'],
#             :url => "{{ 'performers/#{n['id']}' | relative_url }}"
#           }
#           scene_hash[:children][0][:children] << narrator_hash
#         end
#
#         s_ref['shamisen'].each do |s|
#           shamisen_hash = {
#             :name => s['label_eng'],
#             :url => "{{ 'performers/#{s['id']}' | relative_url }}"
#           }
#           scene_hash[:children][1][:children]<< shamisen_hash
#         end
#         s_ref['spucks'].each do |s|
#           spuck_hash = {
#             :name => s['performer']['label_eng'],
#             :url => "{{ 'performers/#{s['performer']['id']}' | relative_url }}",
#             :children => [
#               {
#                 :name => 'using the kashira',
#                 :children => [{
#                   :name => s['kashira']['label_eng'],
#                   :url => "{{ 'kashira/#{s['kashira']['id']}' | relative_url }}",
#                 }]
#               },
#               {
#                 :name => 'playing the character',
#                 :children => [{
#                   :name => s['character']['label_eng'],
#                   :url => "{{ 'characters/#{s['character']['id']}' | relative_url }}",
#                 }]
#               }
#             ]
#           }
#         scene_hash[:children][2][:children] << spuck_hash
#         end
#         performance_hash[:children][0][:children] << scene_hash
#       end
#       play_hash[:children][1][:children] << performance_hash
#     end
#
#     path = 'visualize/data/play-dendrogram.json'
#     File.open(path, 'w') { |file| file.write("---\n---\n#{play_hash.to_json}") }
#   end
  # desc 'generate author network json'
  # task :authnet do
  #   authors = JSON.parse(File.read('_data/authors.json'))
  #   plays = JSON.parse(File.read('_data/plays.json'))
  #
  #   nodes = []
  #   links = []
  #
  #   plays.each do |play|
  #     play['author_id'].each do |author_id|
  #       link = {
  #         'source' => play['pid'].to_s+'p',
  #         'target' => author_id.to_s+'a'
  #       }
  #       play_node = {
  #         'id'    => play['pid'].to_s+'p',
  #         'type'  => 'plays',
  #         'name'  => play['label_eng']
  #       }
  #       author_node = {
  #         'id'    => author_id.to_s+'a',
  #         'type'  => 'authors',
  #         'name'  => authors.detect { |a| a['pid'] == author_id }['label_eng']
  #       }
  #       links << link
  #       nodes << play_node << author_node
  #     end if play.key?('author_id') and play['author_id'].length > 1
  #   end
  #
  #   json_hash = { 'nodes' => nodes.uniq, 'links' => links.uniq }
  #   path = 'visualize/data/author-network.json'
  #   File.open(path, 'w') { |file| file.write(json_hash.to_json) }
  # end
  #
  # desc 'generate json on kashira + characters'
  # task :kach do
  #   spucks = JSON.parse(File.read('_data/spucks.json'))
  #   characters = JSON.parse(File.read('_data/characters.json'))
  #   kashira = JSON.parse(File.read('_data/kashira.json'))
  #
  #   nodes = []
  #   links = []
  #
  #   spucks.each do |spuck|
  #     if spuck.key?('character_id') and spuck.key?('kashira_id')
  #       link = {
  #         'source' => spuck['character_id'].to_s+'c',
  #         'target' => spuck['kashira_id'].to_s+'k'
  #       }
  #       links << link
  #     end
  #   end
  #
  #   links.uniq.each do |link|
  #     character = {
  #       'id'    => link['source'],
  #       'type'  => 'characters',
  #       'name'  => characters.detect { |c| c['pid'] == link['source'].chop }['label_eng']
  #     }
  #     puppet = {
  #       'id'    => link['target'],
  #       'type'  => 'kashira',
  #       'name'  => kashira.detect { |k| k['pid'] == link['target'].chop }['label_eng']
  #     }
  #     nodes << character << puppet
  #   end
  #
  #   json_hash = { 'nodes' => nodes.uniq, 'links' => links.uniq }
  #   path = 'visualize/data/kashira-characters.json'
  #   File.open(path, 'w') { |file| file.write(json_hash.to_json) }
  # end
# end
