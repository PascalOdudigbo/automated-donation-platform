Rails.application.routes.draw do
  
  resources :charity_beneficiaries
  resources :inventories
  resources :beneficiaries
  resources :charity_profiles
  resources :donations
  resources :administrators
  resources :charities
  resources :donors
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
