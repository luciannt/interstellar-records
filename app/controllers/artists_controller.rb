class ArtistsController < ApplicationController
  def index
    render json: Artist.all, status: :ok
  end

  def show
    render json: find_artist, status: :ok
  end

  def create
    authorize()
    render json: Artist.create!(artist_params), status: :created
  end

  def update
    authorized()
    find_artist.update!(artist_params)
    render json: find_artist, status: :accepted
  end

  def destroy
    authorized()
    find_artist.destroy
    head :no_content
  end

  private

  def authorize
    user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless user.role == :admin
  end

  def find_artist
    Artist.find(params[:id])
  end

  def artist_params
    params.permit(:name, :price, :cover)
  end
end
