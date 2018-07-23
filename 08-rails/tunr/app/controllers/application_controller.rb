class ApplicationController < ActionController::Base
 
  before_action :fetch_user

  private
  def fetch_user
    # Set up @current_user once someone has logged in
    @current_user = User.find_by :id => session[:user_id] if session[:user_id].present?
    # forget user id unless
    session[:user_id] = nil unless @current_user.present?
  end

  def check_for_login
    flash[:redirect_from] = request.path
    redirect_to login_path unless @current_user.present?
  end

  def check_for_admin
    flash[:redirect_from] = request.path
    redirect_to login_path unless (@current_user.present? && @current_user.admin?)
  end

end
