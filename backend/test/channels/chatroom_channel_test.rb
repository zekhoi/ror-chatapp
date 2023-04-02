require "test_helper"

class ChatroomChannelTest < ActionCable::Channel::TestCase
  test "subscribed" do
    # Subscribe to the channel with a tag
    subscribe(tag: "test")

    # Assert that the subscription was successful
    assert subscription.confirmed?

    # Assert that the channel was subscribed to the correct stream
    assert_has_stream "chatroom_test"
  end
end