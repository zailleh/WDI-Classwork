class DashboardController < ApplicationController
  def brother
    render plain: %w{ Groucho Harpo Chico }.sample
  end

  def time
    render plain: Time.now.strftime("%m/%d/%Y %I:%M:%S%p")
    # render plain: 'hotdogs'*12;
  end

  def uptime
    render plain: `uptime` # Such backticks won't work on Heroku
  end

  def info
    render json: {
      brother: %w{ Groucho Harpo Chico }.sample,
      time: Time.now.strftime("%m/%d/%Y %I:%M:%S%p"),
      uptime: `uptime`
    }
  end
end
