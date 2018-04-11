require 'json'
require 'tqdm'
require 'fileutils'

include FileUtils

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end

files = ['characters', 'kashira', 'performances', 'performers', 'plays', 'productions', 'scenes', 'tags']

images = JSON.load(File.open("_data/images.json"))

mkdir_p('_data/objids')

files.each do |file|
  data_in = JSON.load(File.open("_data/#{file}.json"))
  data_out = []

  data_in.tqdm.each do |record|
    if record.key? 'image_id'
      record['images'] = []
      assert_array(record['image_id']).uniq.each do |id|
        ref = images.find {|i| i['pid'] == id }
        if ref
          hash = {
            'id' => id,
            'objid' => ref['objid']
          }
          record['images'] << hash
        end
      end
    end
    record.delete('image_id')
    data_out << record
  end
  File.open("_data/objids/#{file}.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
end
