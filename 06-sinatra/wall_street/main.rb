require 'pry'

require 'sinatra'
require 'sinatra/reloader'

require 'stock_quote'

get '/' do
  erb :home
end

get '/price' do
  @stock_symbol = params[:symbol]
  @info = StockQuote::Stock.quote @stock_symbol

  @close_price = @info.close
  @company_name = @info.company_name

  erb :price
end
