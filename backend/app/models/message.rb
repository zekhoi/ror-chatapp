class Message < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user, class_name: 'User', foreign_key: 'users_id'

  validates :content, presence: true
  validates :users_id, presence: true
  validates :chatrooms_id, presence: true
end
