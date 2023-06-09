class Chatroom < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_and_belongs_to_many :users

  validates :tag, presence: true, uniqueness: true
end
