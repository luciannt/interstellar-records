class Record < ApplicationRecord
  belongs_to :artist
  has_many :record_genres
  has_many :genres, through: :record_genres
end
