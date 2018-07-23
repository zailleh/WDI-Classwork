Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root :to => 'pages#home'

  resources :users, :only => [:new, :create, :index]

  resources :mixtapes, :only => [:new, :create, :index, :show]

  get '/login' => 'session#new' # login form
  post '/login' => 'session#create' #  performs login and authenticates password
  delete '/login' => 'session#destroy' # logout
end
