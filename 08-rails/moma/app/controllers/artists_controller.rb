class ArtistsController < ApplicationController
  def index
    @artists = Artist.all.order(:created_at)
  end

  def show
    @artist = Artist.find params[:id]
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find(params[:id])
    artist.update artist_params
    redirect_to artist
  end

  def destroy
    Artist.find(params[:id]).destroy
    redirect_to artists_path
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params

    redirect_to artist
  end

  # Strong params -- create a whitlist of permitted parameters
  private 
  def artist_params
    params.require(:artist).permit(:name, :nationality, :period, :dob, :image)
  end
end
