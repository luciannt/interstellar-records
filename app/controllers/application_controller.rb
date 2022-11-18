class ApplicationController < ActionController::API
  include ActionController::Cookies
  include Pagy::Backend
end
