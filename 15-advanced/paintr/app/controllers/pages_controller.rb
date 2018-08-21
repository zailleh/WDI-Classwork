class PagesController < ApplicationController
  def hamldemo
    @number = rand(1..20)
  end

  def home

  end
end