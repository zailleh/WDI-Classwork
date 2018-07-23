class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def new

  end

  def create
    @p = Planet.create(
      :name => params[:name],
      :image => params[:image],
      :orbit => params[:orbit],
      :diameter => params[:diameter],
      :mass => params[:mass],
      :moons => params[:moons]
    )

    redirect_to planet_path(@p.id)
  end

  def destroy
    Planet.find(params[:id]).destroy

    redirect_to planets_path
  end

  def edit
    @p = Planet.find(params[:id])
  end

  def save
    @p = Planet.find(params[:id])
    @p.name = params[:name]
    @p.image = params[:image]
    @p.orbit = params[:orbit]
    @p.diameter = params[:diameter]
    @p.mass = params[:mass]
    @p.moons = params[:moons]
    @p.save

    redirect_to planet_path(params[:id])
  end
end