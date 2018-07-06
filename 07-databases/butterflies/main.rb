require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3' 
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end


# DEFAULT LANDING PAGE
get '/' do
  erb :home
end

# Index
get '/butterflies' do
  # TODO: Do some stuff with home page.
  
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}','#{params[:family]}','#{params[:image]}')"

  redirect to('/butterflies') # GET request
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id]}"

  redirect to "butterflies/#{params[:id]}"
end

get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first #get the only item in the array

  erb :butterflies_show
end

get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first #get the only item in the array

  erb :butterflies_edit
end

get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id=#{params[:id]}"

  redirect to('/butterflies') # GET request
end


