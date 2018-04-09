require 'json'
require 'yaml'

images = JSON.load(File.open("_data/images.json"))
ids = [64624, 64625, 64626, 64627]
yaml = []

ids.each do |id|
  ref = images.find {|i| i['pid'] == id.to_s }
  yaml << { 'id' => id.to_s, 'objid' => ref['objid'] }
end

puts yaml.to_yaml
