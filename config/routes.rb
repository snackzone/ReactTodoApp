Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :create, :update, :destroy] do
      resources :todo_steps, only: [:index, :create]
    end
    resources :todo_steps, only: [:update, :destroy]
  end

  resource :static_pages, only: :root
end
