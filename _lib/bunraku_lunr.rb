include FileUtils
require 'json'
require 'wax_tasks'

module Bunraku
  def self.lunr(site_config)
      cdir          = site_config['collections_dir'].to_s
      collections   = Lunr.collections(site_config)
      total_fields  = Lunr.total_fields(collections)
      index         = index(cdir, collections)

      Lunr.write_index(index)
    end

  def self.index(cdir, collections)
    index = []
    count = 0
    abort 'There are no valid collections to index.'.magenta if collections.nil?

    collections.each do |c|
      dir = cdir.empty? ? '_' + c[0] : cdir + '/_' + c[0]
      fields = c[1]['lunr_index']['fields'].uniq
      pages = Dir.glob(dir + '/*.md')
      get_content = c[1]['lunr_index']['content']
      # catch
      abort "There are no markdown pages in directory '#{dir}'".magenta if pages.empty?
      abort "There are no fields specified for #{c[0]}.".magenta if fields.empty?
      puts "Loading #{pages.length} pages from #{dir}"
      # index each page in collection
      pages.each do |page|
        index << page_hash(page, fields, get_content, count)
        count += 1
      end
    end
    JSON.pretty_generate(index)
  end

  def self.page_hash(page, fields, get_content, count)
    yaml = YAML.load_file(page)
    hash = {
      'lunr_id' => count,
      'link' => "{{'" + yaml.fetch('permalink') + "' | relative_url }}",
      'collection' => yaml.fetch('permalink').to_s[/^\/(\w*)\//].tr('/', '')
    }
    fields.each { |f| hash[f] = Lunr.rm_diacritics(thing2string(yaml[f]).to_s) }
    hash['content'] = Lunr.rm_diacritics(Lunr.clean(File.read(page).to_s)) if get_content
    hash
  end

  def self.thing2string(thing)
    if thing.is_a? Array
      thing = thing.join('///') if thing.first.is_a? String
      if thing.first.is_a? Hash
        label_list = []
        thing.each do |t|
          label = t['label_eng']
          label += " (#{t['label_ka']}) " if t.key? 'label_ka'
          label += " (#{t['label_ja']}) " if t.key? 'label_ja'
          label_list << label
        end
        thing = label_list.join('///')
      end
    end
    if thing.is_a? Hash
      label = thing['label_eng']
      label += " (#{thing['label_ka']}) " if thing.key? 'label_ka'
      label += " (#{thing['label_ja']}) " if thing.key? 'label_ja'
      thing = label
    end
    thing.to_s
  end
end
