class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    puts "#{params[:username]} has joined the chat on channel: chatroom_#{params[:tag]}"
    # find or create
    # chat_room = Chatroom.find_or_create_by(tag: params[:tag])
    # stream_for chat_room
    stream_from "chatroom_#{params[:tag]}"
    notification = { content: "#{params[:username]} has joined the chat", username: "ChatHubBOT" }
    broadcast(notification)
  end

  def unsubscribed
    puts "#{params[:username]} has left the chat on channel: chatroom_#{params[:tag]}"
    # chat_room = Chatroom.find_or_create_by(tag: params[:tag])
    # Any cleanup needed when channel is unsubscribed
    # stop_all_streams
    # stop_stream_from "chatroom_#{params[:tag]}"
    notification = { content: "#{params[:username]} has left the chat", username: "ChatHubBOT" }
    broadcast(notification)
  end

  def receive(data)
    broadcast(data)
  end

  def broadcast(data)
    # chat_room = Chatroom.find_or_create_by(tag: params[:tag])
    # ActionCable.server.broadcast(chat_room, data)
    ActionCable.server.broadcast("chatroom_#{params[:tag]}", data)
  end

  def get_chatroom(tag)
    Chatroom.find_by(tag: tag)
  end
  
  def get_sender(username)
    User.find_by(username: username)
  end
end
