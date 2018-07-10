Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#homepage' # Special way to write the root because it's important
  get '/home' => 'pages#homepage'   # controller # action  -- app/controllers/pages_controller.rb # PagesController.homepage
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
