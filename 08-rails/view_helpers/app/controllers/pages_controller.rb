class PagesController < ApplicationController
  def home
    render :home
  end
  
  def numbers
    @amount = 123.123124
    @large_amount = 132908423429837423
    @phone_number = 283658935

    render :numbers
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @friend_count = 1
    @enemies_count = 15
    @story = "A very long long long long long long long long long long long long long  time ago"
    render :text
  end

  def assets
    render :assets
  end

  def url
    render :url
  end
end