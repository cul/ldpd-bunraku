source 'https://rubygems.org'

group :development, :test do
  gem 'jekyll', '~> 3.8'
  # Jekyll 3.9.2's Jekyll::Stevenson logger subclass overrides Logger#initialize
  # without calling super, so it never sets @level_override. Ruby 3.3's bundled
  # logger gem (>= 1.6.0) reads that ivar in Logger#level, causing a NoMethodError.
  # Pin to a pre-1.6 release until Jekyll is upgraded.
  gem 'logger', '~> 1.5.3'
  gem 'kramdown-parser-gfm'
  gem 'rspec'
  gem 'selenium-webdriver'
  gem 'webdrivers', '~> 4.0', require: false
  gem 'capybara'
  gem 'rack-jekyll'
  gem 'diane'
  gem 'wax_tasks', '~> 0.2.0'
end
