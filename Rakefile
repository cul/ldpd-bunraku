spec = Gem::Specification.find_by_name 'wax_tasks'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each {|r| load r}

# D3 tasks
require 'json'

namespace :d3 do
  desc 'generate author network json'
  task :authnet do
    authors = JSON.parse(File.read('_data/authors.json'))
    plays = JSON.parse(File.read('_data/plays.json'))

    nodes = []
    links = []

    plays.each do |play|
      play['author_id'].each do |author_id|
        link = {
          'source' => play['pid'].to_s+'p',
          'target' => author_id.to_s+'a'
        }
        play_node = {
          'id'    => play['pid'].to_s+'p',
          'type'  => 'plays',
          'name'  => play['label_eng']
        }
        author_node = {
          'id'    => author_id.to_s+'a',
          'type'  => 'authors',
          'name'  => authors.detect { |a| a['pid'] == author_id }['label_eng']
        }
        links << link
        nodes << play_node << author_node
      end if play.key?('author_id') and play['author_id'].length > 1
    end

    json_hash = { 'nodes' => nodes.uniq, 'links' => links.uniq }
    path = 'visualize/data/author-network.json'
    File.open(path, 'w') { |file| file.write(json_hash.to_json) }
  end

  desc 'generate json on kashira + characters'
  task :kach do
    spucks = JSON.parse(File.read('_data/spucks.json'))
    characters = JSON.parse(File.read('_data/characters.json'))
    kashira = JSON.parse(File.read('_data/kashira.json'))

    nodes = []
    links = []

    spucks.each do |spuck|
      if spuck.key?('character_id') and spuck.key?('kashira_id')
        link = {
          'source' => spuck['character_id'].to_s+'c',
          'target' => spuck['kashira_id'].to_s+'k'
        }
        links << link
      end
    end

    links.uniq.each do |link|
      character = {
        'id'    => link['source'],
        'type'  => 'characters',
        'name'  => characters.detect { |c| c['pid'] == link['source'].chop }['label_eng']
      }
      puppet = {
        'id'    => link['target'],
        'type'  => 'kashira',
        'name'  => kashira.detect { |k| k['pid'] == link['target'].chop }['label_eng']
      }
      nodes << character << puppet
    end

    json_hash = { 'nodes' => nodes.uniq, 'links' => links.uniq }
    path = 'visualize/data/kashira-characters.json'
    File.open(path, 'w') { |file| file.write(json_hash.to_json) }
  end
end
