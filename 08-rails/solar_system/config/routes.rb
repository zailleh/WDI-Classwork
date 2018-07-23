Rails.application.routes.draw do
  root :to => 'planets#index'

  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => :planet
  delete '/planets/:id' => 'planets#destroy'

  get '/planets/:id/edit' => 'planets#edit', :as => :planet_edit
  post '/planets/:id' => 'planets#save'

end
