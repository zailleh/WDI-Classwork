Rails.application.routes.draw do
  root 'pages#index'

  # vanilla text API endpoints
  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'

  # get JSON API endpoint
  get '/info' => 'dashboard#info'
end
