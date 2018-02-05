require 'rspec'
require 'selenium/webdriver'
require 'capybara/dsl'
require 'rack/jekyll'
require 'rack/test'

RSpec.configure do |config|
  config.include Capybara::DSL

  $config = YAML.load_file('_config.yml')
  $baseurl = $config['baseurl'].to_s
  $search_tests = $config['quoll']
  if $config['permalink'] == 'pretty'
    $perma_ext = "/"
  else
    $perma_ext = ".html"
  end

  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(app, browser: :chrome)
  end

  Capybara.register_driver :headless_chrome do |app|
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
      chromeOptions: { args: %w(headless disable-gpu) }
    )

    Capybara::Selenium::Driver.new app,
      browser: :chrome,
      desired_capabilities: capabilities
  end

  Capybara.javascript_driver = :headless_chrome
  Capybara.app = Rack::Jekyll.new(:force_build => false)
end
