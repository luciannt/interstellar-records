class RecordsController < ApplicationController
  before_action :authorize

  def index
    render json: Record.all, status: :ok
  end

  def show
    render json: find_record, status: :ok
  end

  def create
    render json: Record.create!(record_params), status: :created
  end

  def update
    find_record.update!(record_params)
    render json: find_record, status: :accepted
  end

  def destroy
    find_record.destroy
    head :no_content
  end

  private

  def authorize
    user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless user.role == :admin
  end

  def find_record
    Record.find(params[:id])
  end

  def record_params
    params.permit(:name, :price, :cover)
  end
end
