class GenresController < ApplicationController
  before_action :authorize

  def index
    render json: Genre.all, status: :ok
  end

  def show
    render json: find_genre, status: :ok
  end

  def create
    render json: Genre.create!(genre_params), status: :created
  end

  def update
    find_genre.update!(genre_params)
    render json: find_genre, status: :accepted
  end

  def destroy
    find_genre.destroy
    head :no_content
  end

  private

  def authorize
    user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless user.role == :admin
  end

  def find_genre
    Genre.find(params[:id])
  end

  def genre_params
    params.permit(:name, :price, :cover)
  end
end
