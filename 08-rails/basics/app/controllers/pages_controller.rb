class PagesController < ApplicationController

  def homepage
    render :homepage # erb :homepage in Sinatra
  end

  def faq
    render :faq
  end

  def about
    render :about
  end
end
