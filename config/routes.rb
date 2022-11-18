Rails.application.routes.draw do
  resources :record_genres
  resources :add_column_to_records
  resources :wishlists
  resources :users
  resources :records
  resources :artists
  resources :genres
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
