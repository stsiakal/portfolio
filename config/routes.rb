Rails.application.routes.draw do
  root to: "pages#home"
  get 'projects', to: "pages#projects"
  get 'about', to: "pages#about"
  get 'contact', to: "pages#contact"
end
