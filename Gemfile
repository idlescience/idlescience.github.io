source "https://rubygems.org"

gem "github-pages", "~> 228", group: :jekyll_plugins

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", "~> 0.1.1"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
platforms :jruby do
  gem "http_parser.rb", "~> 0.6.0"
end

gem "jekyll"
gem "jekyll-paginate"
gem "support-for"
gem "webrick", "~> 1.8"
gem 'jekyll-scholar', group: :jekyll_plugins