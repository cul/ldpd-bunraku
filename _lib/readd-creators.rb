require 'json'
require 'tqdm'

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end

images = JSON.load(File.open("_data/images.json"))
creators = JSON.load(File.open("_data/creators.json"))
data_out = []

images.tqdm.each do |record|
  if record.key? 'creator'
    ref = creators.find {|i| i['pid'] == record['creator'] }
    if ref
      record['creator'] = ref['label']
    end
    record.delete('creator') unless record['creator']
  end
  data_out << record
end

File.open("_data/images-2.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
