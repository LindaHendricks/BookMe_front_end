Rails.application.routes.draw do
  resources :shootings
  resources :photographers
  #resources :fashiongirls


get "/fashiongirls", to: "fashiongirls#index"
post "/fashiongirls", to: "fashiongirls#create"
get "/fashiongirls/:id", to: "fashiongirls#show"
patch "/fashiongirls/:id", to: "fashiongirls#update"
delete "/fashiongirls/:id", to: "fashiongirls#delete"





  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
