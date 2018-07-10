Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'root#home'
  get '/stocks' => 'stocks#home'
  get '/stocks/info' => 'stocks#search'

  get '/books' => 'books#home'
  get '/books/info' => 'books#search'
end
