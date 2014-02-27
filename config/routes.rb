SmallChat::Application.routes.draw do

  root 'messages#index'
  resources :messages

end
