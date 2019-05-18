class ApplicationController < ActionController::Base
 Webpacker::Helper
  protect_from_forgery with: :null_session
end
