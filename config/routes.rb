Rails.application.routes.draw do
  resources :healthsurveys
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  #get    "survey"          => "#collectors#new",   :as => 'survey'
  #get   "set_2.html.erb" => "healthsurveys#set_2", :as => 'set_2.html.erb'
  #get   "survey_q2.html.erb" => "collectors#survey_q2", :as => 'q2'
  #get   "survey_q3.html.erb" => "collectors#survey_q3", :as => 'q3'
  #get   "survey_q4.html.erb" => "collectors#survey_q4", :as => 'q4'
  #get   "survey_q5.html.erb" => "collectors#survey_q5", :as => 'q5'
  #get   "survey_q6.html.erb" => "collectors#survey_q6", :as => 'q6'
  #get   "survey_q7.html.erb" => "collectors#survey_q7", :as => 'q7'
  #get   "survey_q8.html.erb" => "collectors#survey_q8", :as => 'q8'
  #get   "survey_q8.html.erb" => "collectors#survey_q9", :as => 'q9'
  #get   "survey_q10.html.erb" => "collectors#survey_q10", :as => 'q10'
  #get   "results" => "collectors#results", :as => 'results'
  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
