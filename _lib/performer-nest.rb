require 'json'
require 'tqdm'

def assert_array(obj)
  obj = [obj] unless obj.is_a? Array
  obj
end


fields = [ 'narrator_perf_id', 'shamisen_perf_id', 'musician_perf_id','puppeteer_perf_id' ]

data_in = JSON.load(File.open("_data/nested/performers.json"))
performances = JSON.load(File.open("_data/performances.json"))
data_out = []

data_in.tqdm.each do |record|
  fields.each_with_index do |f, i|
    if record.keys.include?(f)
      record['performances'] = []

      assert_array(record[f]).uniq.each do |id|
        ref = performances.find {|i| i['pid'] == id }
        if ref
          hash = { 'id' => id }
          hash['label_eng'] = ref['label_eng'] if ref.key?('label_eng')
          hash['label_ka'] = ref['label_ka'] if ref.key?('label_ka')
          hash['type'] = f.sub('_perf_id','')
          record['performances'] << hash
        end
      end

      record.delete(f)
    end
  end
  data_out << record
end
File.open("_data/nested/performers-2.json", 'w') { |file| file.write(JSON.pretty_generate(data_out)) }
