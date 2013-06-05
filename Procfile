# only web is auto-launched on heroku
web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb
# worker processes must be manually scaled on heroku
worker: bundle exec rake jobs:work
