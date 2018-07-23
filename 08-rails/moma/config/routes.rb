# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                   artists GET    /artists(.:format)                                                                       artists#index
#                           POST   /artists(.:format)                                                                       artists#create
#                new_artist GET    /artists/new(.:format)                                                                   artists#new
#               edit_artist GET    /artists/:id/edit(.:format)                                                              artists#edit
#                    artist GET    /artists/:id(.:format)                                                                   artists#show
#                           PATCH  /artists/:id(.:format)                                                                   artists#update
#                           PUT    /artists/:id(.:format)                                                                   artists#update
#                           DELETE /artists/:id(.:format)                                                                   artists#destroy
#                     works GET    /works(.:format)                                                                         works#index
#                           POST   /works(.:format)                                                                         works#create
#                  new_work GET    /works/new(.:format)                                                                     works#new
#                 edit_work GET    /works/:id/edit(.:format)                                                                works#edit
#                      work GET    /works/:id(.:format)                                                                     works#show
#                           PATCH  /works/:id(.:format)                                                                     works#update
#                           PUT    /works/:id(.:format)                                                                     works#update
#                           DELETE /works/:id(.:format)                                                                     works#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :artists
  resources :works
  # resources :works, :except => [:destroy]
  # resources :works, :only => [:index, :show, :new, :create] 
end
