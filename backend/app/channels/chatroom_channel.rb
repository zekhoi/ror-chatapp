class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    puts "Subscribed to chatroom_#{params[:tag]}"
    # find or create
    # chat_room = Chatroom.find_or_create_by(tag: params[:tag])
    # stream_for chat_room
    stream_from "chatroom_#{params[:tag]}"

    # notification = { content: "#{params[:username]} has joined the chat", username: "ChatAppBOT" }
    # broadcast(notification)
  end

  def unsubscribed
    puts "Unsubscribed from chatroom_#{params[:tag]}"
    # Any cleanup needed when channel is unsubscribed
    # notification = { content: "#{params[:username]} has left the chat", username: "ChatAppBOT" }
    # broadcast(notification)
  end

  def receive(data)
    puts "Received data: #{data}"
    # user_id = User.find_by(username: data['username']).id
    # chatroom_id = Chatroom.find_by(tag: params[:tag]).id
    # message = Message.create(content: data['content'], chatrooms_id: chatroom_id, users_id: user_id)
    # if message.valid?
    #   message.save
    # else
    #   puts "Error saving message: #{message.errors.full_messages.to_sentence}"
    # end
    broadcast(data)
  end

  def broadcast(data)
    # ActionCable.server.broadcast("chatroom_#{params[:tag]}", data)
    ActionCable.server.broadcast("chatroom_#{params[:tag]}", data)
  end

  def get_chatroom(tag)
    Chatroom.find_by(tag: tag)
  end
  
  def get_sender(username)
    User.find_by(username: username)
  end
end
