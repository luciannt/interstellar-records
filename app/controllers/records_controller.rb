class RecordsController < ApplicationController
  def index
    @pagy, @records = pagy(Record.all.joins(:artist), items: 24)
    join = []

    @records.each do |record|
      join = [*join, { **record.as_json, artist: Artist.find_by(id: record[:artist_id]) }]
    end

    render json: { page: @pagy.page, records: join }, status: :ok
  end

  def show
    render json: find_record, status: :ok
  end

  def create
    authorize()
    render json: Record.create!(record_params)
  end

  def update
    authorize()
    find_record.update!(record_params)
    render json: find_record, status: :accepted
  end

  def destroy
    authorize()
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
