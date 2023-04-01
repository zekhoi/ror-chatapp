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

  # test "unsubscribed" do
  #   # Subscribe to the channel with a tag
  #   subscribe(tag: "test")

  #   # Unsubscribe from the channel
  #   unsubscribe

  #   # Assert that the unsubscription was successful
  #   assert subscription.unsubscribed
  # end

  # test "receive" do
  #   # Subscribe to the channel with a tag
  #   subscribe(tag: "test")

  #   # Send a message to the channel
  #   message = { content: "Hello, world!", username: "usertest" }
  #   perform :receive, message

  #   # Assert that the message was broadcasted to the channel
  #   assert_broadcast_on "chatroom_test", message
  # end
end