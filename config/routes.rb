NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "static_pages#home"
  get "/contact", to: "static_pages#contact"
  get "/about", to: "static_pages#about"
end
