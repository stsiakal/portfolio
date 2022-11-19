Rails.application.routes.draw do
  root to: 'pages#home'
  get '/projects', to: 'pages#projects'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
