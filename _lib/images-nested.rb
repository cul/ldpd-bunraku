require 'json'
require 'tqdm'

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end

fields = ['character_id', 'kashira_id', 'performance_id', 'performer_id', 'play_id', 'production_id', 'scene_id', 'tag_id']

files = ['characters', 'kashira', 'performances', 'performers', 'plays', 'productions', 'scenes', 'tags']

images = JSON.load(File.open("_data/images.json"))
data_out = []

images.tqdm.each do |record|
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
          hash['has_images'] = true if ref.key?('image_id')
          record[new_field] << hash
        end
      end
      record.delete(f)
    end
  end
  data_out << record
end

File.open("_data/images-2.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
