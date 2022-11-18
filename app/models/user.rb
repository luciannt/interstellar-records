class User < ApplicationRecord
  has_one :wishlist

  validates :role,
            :inclusion => { :in => ["Admin", "User"] }
  validates :username, presence: true, uniqueness: true

  has_secure_password #bcrypt
end
