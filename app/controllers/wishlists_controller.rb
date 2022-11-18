class WishlistsController < ApplicationController
  before_action :authorize

  def index
    render json: Wishlist.all, status: :ok
  end

  def show
    render json: find_wishlist, status: :ok
  end

  def create
    render json: Wishlist.create!(wishlist_params), status: :created
  end

  def update
    find_wishlist.update!(wishlist_params)
    render json: find_wishlist, status: :accepted
  end

  def destroy
    find_wishlist.destroy
    head :no_content
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def find_wishlist
    Wishlist.find(params[:id])
  end

  def wishlist_params
    params.permit(:records, :user_id)
  end
end
