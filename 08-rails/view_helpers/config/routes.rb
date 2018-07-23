Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/numb3rs'  => 'pages#numbers', :as => :numbers
  get '/text'     => 'pages#text'
  get '/assets'   => 'pages#assets'
  get '/url'      => 'pages#url'

end
