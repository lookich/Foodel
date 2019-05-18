Rails.application.routes.draw do
  root to: 'home#index'

  get 'products', to: 'home#index'
  get 'products/new', to: 'home#index'
  get 'products/:id', to: 'home#index'
  get 'products/:id/edit', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :destroy, :update, :show]
    end
  end
end
