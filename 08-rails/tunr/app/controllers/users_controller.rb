class UsersController < ApplicationController
   before_action :check_for_admin, :only => [:index]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save #returns true on success
      session[:user_id] = @user.id
      redirect_to "/" 
    else
      render :new
    end
  end

  def index
    @users = User.all
  end


  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
