FashionFight::Application.routes.draw do

  scope :api do
    post 'contests/:id/comments' => 'contests#comment', :as => :contest_comment_api
    delete 'contests/:contest_id/comments/:id' => 'contests#delete', :as => :contest_delete_api
  end

  resources :contests, :only => [:index, :show]
  root 'contests#index'
end
