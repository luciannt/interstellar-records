class UsersController < ApplicationController
  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    render json: User.create!(user_params), status: :created
  end

  def update
    find_user.update!(user_params)
    render json: find_user, status: :accepted
  end

  def destroy
    find_user.destroy
    head :no_content
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:name, :email, :picture, :username, :password)
  end
end
