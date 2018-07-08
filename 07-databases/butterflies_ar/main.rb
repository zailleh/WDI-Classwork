require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this for you, but meanwhile we have to do this ourselves
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true # :optional required since Rails 5
end

def save_butterfly (b, params)
  b.name = params[:name]
  b.family = params[:family]
  b.image = params[:image]
  b.plant_id = params[:plant_id]
  b.save
end

# DEFAULT LANDING PAGE
get '/' do
  erb :home
end

# Index
get '/butterflies' do
  # TODO: Do some stuff with home page.
  
  @butterflies = Butterfly.all
  erb :butterflies_index
end

post '/butterflies' do
  b = Butterfly.new
  save_butterfly b, params

  redirect to("/butterflies/#{ b.id }") # GET request
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies/:id' do
  b = Butterfly.find(params[:id])
  save_butterfly b, params

  

  # redirect to "butterflies/#{params[:id]}"
end

get '/butterflies/:id' do
  @butterfly = Butterfly.find(params[:id])

  erb :butterflies_show
end

get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find(params[:id])

  erb :butterflies_edit
end

get '/butterflies/:id/delete' do
  Butterfly.find(params[:id]).destroy

  redirect to('/butterflies') # GET request
end


##### ----- PLANTS ------ #########


class Plant < ActiveRecord::Base
  has_many :butterfly
end

def save_plant (p, params)
  p.name = params[:name]
  p.image = params[:image]
  p.save
end

# DEFAULT LANDING PAGE
# Index
get '/plants' do
  # TODO: Do some stuff with home page.
  
  @plants = Plant.all
  erb :plants_index
end

post '/plants' do
  p = Plant.new
  save_plant p, params

  redirect to("/plants/#{ p.id }") # GET request
end

get '/plants/new' do
  erb :plants_new
end

post '/plants/:id' do
  p = Plant.find(params[:id])
  save_plant p, params

  redirect to "plants/#{params[:id]}"
end

get '/plants/:id' do
  @plant = Plant.find(params[:id])

  erb :plants_show
end

get '/plants/:id/edit' do
  @plant = Plant.find(params[:id])

  erb :plants_edit
end

get '/plants/:id/delete' do
  Plant.find(params[:id]).destroy

  redirect to('/plants') # GET request
end


get '/pry' do
  binding.pry #for debugging only
end