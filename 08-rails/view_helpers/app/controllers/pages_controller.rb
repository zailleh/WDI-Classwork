class PagesController < ApplicationController
  def home
    render :home
  end
  
  def numbers
    

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