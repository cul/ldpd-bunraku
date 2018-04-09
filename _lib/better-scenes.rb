require 'json'
require 'tqdm'

scenes = JSON.load(File.open("_data/scenes.json"))
performers = JSON.load(File.open("_data/performers.json"))
performances = JSON.load(File.open("_data/performances.json"))
productions = JSON.load(File.open("_data/productions.json"))
performers = JSON.load(File.open("_data/performers.json"))
spucks = JSON.load(File.open("_data/spucks.json"))
characters = JSON.load(File.open("_data/characters.json"))
kashira = JSON.load(File.open("_data/kashira.json"))

data_out = []

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end

scenes.tqdm.each do |record|
  if record.key? 'perf_id'
    ref = performances.find {|i| i['pid'] == record['perf_id'] }
    hash = {'id' => ref['pid'] }
    hash['label_eng'] = ref['label_eng'] if ref.key? 'label_eng'
    hash['label_ka'] = ref['label_ka'] if ref.key? 'label_ka'
    record['performance'] = hash
  end
  if record.key? 'prod_id'
    ref = productions.find {|i| i['pid'] == record['prod_id'] }
    hash = {'id' => ref['pid'] }
    hash['label_eng'] = ref['label_eng'] if ref.key? 'label_eng'
    hash['label_ka'] = ref['label_ka'] if ref.key? 'label_ka'
    record['production'] = hash
  end
  if record.key? 'narrator_id'
    record['narrators'] = []
    assert_array(record['narrator_id']).each do |id|
      ref = performers.find {|i| i['pid'] == id }
      hash = {'id' => id }
      hash['label_eng'] = ref['label_eng'] if ref.key? 'label_eng'
      hash['label_ka'] = ref['label_ka'] if ref.key? 'label_ka'
      record['narrators'] << hash
    end
  end
  if record.key? 'shamisen_id'
    record['shamisen'] = []
    assert_array(record['shamisen_id']).each do |id|
      ref = performers.find {|i| i['pid'] == id }
      hash = {'id' => id }
      hash['label_eng'] = ref['label_eng'] if ref.key? 'label_eng'
      hash['label_ka'] = ref['label_ka'] if ref.key? 'label_ka'
      record['shamisen'] << hash
    end
  end
  if record.key? 'spuck_id'
    record['spucks'] = []
    assert_array(record['spuck_id']).each do |spuck_id|
      spuck_ref = spucks.find {|i| i['pid'] == spuck_id }
      if spuck_ref
        hash = { 'id' => spuck_id }
        hash['character'] = spuck_ref['characters'].first if spuck_ref.key? 'characters'
        hash['kashira'] = spuck_ref['kashira'].first if spuck_ref.key? 'kashira'
        hash['performer'] = spuck_ref['performers'].first if spuck_ref.key? 'performers'
        record['spucks'] << hash
      end
    end
  end
  if record.key? 'plays'
    record['play'] = record['plays'].first
  end
  record.delete('spuck_id')
  record.delete('narrator_id')
  record.delete('shamisen_id')
  record.delete('perf_id')
  record.delete('prod_id')
  record.delete('plays')
  data_out << record
end
File.open("_data/scenes-2.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
