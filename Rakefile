# load wax_tasks
wt = Gem::Specification.find_by_name 'wax_tasks'
Dir.glob("#{wt.gem_dir}/lib/tasks/*.rake").each {|r| load r}

wax_tasks_rb = "#{wt.gem_dir}/lib/wax_tasks.rb"
bunraku_rb = "./_lib/bunraku_lunr.rb"

require_relative wax_tasks_rb
require_relative bunraku_rb
require 'json'

namespace :bunraku do
  desc 'generate custom search index'
  task :lunr do
    config = WaxTasks.config
    Bunraku.lunr(config)
  end
end
