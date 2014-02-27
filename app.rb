require 'bundler'
Bundler.require
require 'debugger'

Dir.glob('./lib/*.rb') do |model|
  require model
end


module Gol
  class App < Sinatra::Application
    #set up world
    @@da_world = World.new
    @@game = Set_up.new(@@da_world)
    # @@game.pulsar

    #configure
    configure do
      set :root, File.dirname(__FILE__)
      set :public_folder, 'public'
    end

    #routes
    get '/' do
      File.read("public/index.html")
    end

    get '/gol' do
      @@game.send("blinker")
      @cur_world = @@da_world      
      @@da_world.tick!
      @@da_world.display.to_json
      # @cur_world.json
    end

    get '/custom.css' do
      scss :custom
    end

    #helpers
    helpers do
      def partial(file_name)
        erb file_name, :layout => false
      end
    end

  end
end
