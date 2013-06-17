MenuMaster::Application.routes.draw do
  namespace :admin do
    devise_for :admin_users, ActiveAdmin::Devise.config
    ActiveAdmin.routes(self)
  end

  root :to => 'welcome#index'

end
