spec = Gem::Specification.find_by_name 'wax_tasks'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each {|r| load r}

# D3 tasks
require 'json'

namespace :d3 do
  desc 'generate json on performers + their kashira'
  task :kap do
    spucks = JSON.parse(File.read('_data/spucks.json'))
    performers = JSON.parse(File.read('_data/performers.json'))
    kashira = JSON.parse(File.read('_data/kashira.json'))

    nodes = []
    links = []

    spucks.each do |spuck|
      if spuck.key?('puppeteer_id') and spuck.key?('kashira_id')
        link = {
          'source' => spuck['puppeteer_id'].to_s+'p',
          'target' => spuck['kashira_id'].to_s+'k'
        }
        links << link
      end
    end

    links.uniq.each do |link|
      puppeteer = {
        'id'    => link['source'],
        'type'  => 'performers',
        'name'  => performers.detect { |p| p['pid'] == link['source'].chop }['label_eng']
      }
      puppet = {
        'id'    => link['target'],
        'type'  => 'kashira',
        'name'  => kashira.detect { |k| k['pid'] == link['target'].chop }['label_eng']
      }
      nodes << puppeteer << puppet
    end

    json_hash = { 'nodes' => nodes.uniq, 'links' => links.uniq }
    path = 'visualize/data/kashira-performers.json'
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
