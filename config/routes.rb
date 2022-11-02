Rails.application.routes.draw do
  resources :stories
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
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #login and logout routes for donors
  get "/meDonor", to: "donors#loggedIn"
  post "/loginDonor", to: "donors#login"
  delete "/logoutDonor", to: "donors#logout"
  #login and logout routes for administrators
  get "/meAdministrator", to: "administrators#loggedIn"
  post "/loginAdministrator", to: "administrators#login"
  delete "/logoutAdministrator", to: "administrators#logout"
  #login and logout routes for charities
  get "/meCharity", to: "charities#loggedIn"
  post "/loginCharity", to: "charities#login"
  delete "/logoutCharity", to: "charities#logout"

  #getting a charitys beneficiaries
  get "/a_charitys_beneficiaries/:charity_id", to: "charity_beneficiaries#charity_beneficiaries"

  #getting a charitys donations
  get "/a_charitys_donations/:charity_id", to: "donations#charity_donations"

  #getting a donor's donations
  get "/a_donors_donations/:donor_id", to: "donations#donor_donations"

  #getting charitys inventories
  get "/charities_inventories/:charity_id", to: "inventories#charity_inventories"
  #getting benefeciary stories
  get "/a_charitys_stories/:charity_id", to: "stories#charity_stories"
end
