require "test_helper"

class ChatroomChannelTest < ActionCable::Channel::TestCase
  test "subscribed" do
    
    # Subscribe to the channel with a tag
    subscribe(tag: "test")

    chat_room = Chatroom.find_or_create_by(tag: "test")

    # Assert that the subscription was successfully created
    assert subscription.confirmed?
    assert_equal chat_room, subscription.streams.first
  end
end