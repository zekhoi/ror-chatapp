require "test_helper"

class ChatroomChannelTest < ActionCable::Channel::TestCase
  test "subscribed" do
    # Subscribe to the channel
    subscribe tag: "test"

    # Asserts that the subscription was successfully created
    assert subscription.confirmed?

    # Asserts that the channel subscribes connection to a stream
    assert "chatroom_test", streams.first
  end

  test "unsubscribed" do
    # Subscribe to the channel
    subscribe tag: "test"

    # Perform any other actions that need to happen before the subscription is terminated
    perform :unsubscribed

    # Asserts that the subscription was successfully terminated
    assert subscription.rejected?
  end

  test "receive" do
    # Subscribe to the channel
    subscribe tag: "test"

    # Perform any other actions that need to happen before the subscription is terminated
    perform :receive, { content: "Hello World", username: "usertest" }

    # Asserts that the subscription was successfully terminated
    assert subscription.rejected?
  end
end
