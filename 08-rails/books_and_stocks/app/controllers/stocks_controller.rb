class StocksController < ApplicationController
  def home
    render :home
  end

  def search
    @stock_symbol = params[:stock]
    @info = StockQuote::Stock.quote @stock_symbol

    if @info.nil? 
      redirect_to stocks_path
    else
      @close_price = @info.close
      @company_name = @info.company_name
      render :result
    end
  end
end