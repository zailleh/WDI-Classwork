require 'sinatra' # sinatra dsl for web servers
require 'sinatra/reloader'
require 'pry'
get '/hello' do 
  "Hello World!" # will be appended to the body
end

get '/' do
  "Welcome to Sinatra web server powered by Ruby!"
end


get '/lucky_number' do
  "Here is your lucky number: #{ Random.rand 1..40 }"
end

get '/uptime' do
  `uptime`
end

# Dynamic URLs
get '/fanclub/:name' do
  # params hash has *indifferent hash access*
  "#{params[:name].capitalize} is a member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].capitalize } is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].capitalize } is a proud member of the Marx Brothers fan club and their favourite Marx Brother is #{ params[:favourite].capitalize }."
end

# Crappy Calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

get '/add/:x/:y' do
  result = params[:x].to_f + params[:y].to_f
  "The result is #{ result }"
end

get '/subtract/:x/:y' do
  result = params[:x].to_f - params[:y].to_f
  "The result is #{ result }"
end

get '/divide/:x/:y' do
  result = params[:x].to_f / params[:y].to_f
  "The result is #{ result }"
end

# Problems
# 1. where is the HTML?
# 2. how can we get information from the user without making them change the url