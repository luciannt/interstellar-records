class RecordSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :cover
  has_one :artist
end
