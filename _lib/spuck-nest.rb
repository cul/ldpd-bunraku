require 'json'
require 'tqdm'

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end

fields = [ 'character_id', 'kashira_id', 'scene_id', 'puppeteer_id' ]
files = [ 'characters', 'kashira', 'scenes', 'performers' ]

data_in = JSON.load(File.open("_data/spucks.json"))
data_out = []

data_in.tqdm.each do |record|
  fields.each_with_index do |f, i|
    if record.keys.include?(f)
      new_field = files[i]
      ref_data = JSON.load(File.open("_data/#{new_field}.json"))
      record[new_field] = []

      assert_array(record[f]).uniq.each do |id|
        ref = ref_data.find {|i| i['pid'] == id }
        if ref
          hash = { 'id' => id }
          hash['label_eng'] = ref['label_eng'] if ref.key?('label_eng')
          hash['label_ka'] = ref['label_ka'] if ref.key?('label_ka')
          record[new_field] << hash
        end
      end

      record.delete(f)
    end
  end
  data_out << record
end
File.open("_data/nested/spucks.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
