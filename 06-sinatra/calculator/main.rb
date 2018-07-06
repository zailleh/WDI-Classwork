require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/result' do
  # Parse user input
  @x = params[:x].to_f 
  @y = params[:y].to_f

  # perform operation
  @result = case params[:op]
  when '*' then @x * @y
  when '/' then @x / @y
  when '+' then @x + @y
  when '-' then @x - @y
  end

  #render result
  erb :result
end
