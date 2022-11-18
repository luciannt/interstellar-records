class RecordGenresController < ApplicationController
  before_action :authorize

  def index
    render json: RecordGenre.all, status: :ok
  end

  def show
    render json: find_record_genre, status: :ok
  end

  def create
    render json: RecordGenre.create!(record_genre_params), status: :created
  end

  def update
    find_record_genre.update!(record_genre_params)
    render json: find_record_genre, status: :accepted
  end

  def destroy
    find_record_genre.destroy
    head :no_content
  end

  private

  def authorize
    user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless user.role == :admin
  end

  def find_record_genre
    RecordGenre.find(params[:id])
  end

  def record_genre_params
    params.permit(:name, :price, :cover)
  end
end
