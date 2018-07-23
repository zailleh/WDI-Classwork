class MixtapesController < ApplicationController
  before_action :check_for_login, :only => [:new, :create, :index]
  
  def new
    @mixtape = Mixtape.new
  end

  def create
    @current_user.mixtapes.create mixtape_params
  end

  def index
    @mixtapes = @current_user.mixtapes
  end

  def show
    @mixtape = Mixtape.find params[:id]
  end

  private
  def mixtape_params
    params.require(:mixtape).permit(:title)
  end
end
