class User < ApplicationRecord
  has_and_belongs_to_many :chatrooms

  validates :username, presence: true, uniqueness: true
end
