class RecordGenreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :record
  has_one :genre
end
