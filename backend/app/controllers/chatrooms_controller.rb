class ChatroomsController < ApplicationController
  def index
    # Get all the chatrooms
    chatrooms = Chatroom.all

    render json: {
      code: 200,
      data: chatrooms
    }
  end

  def show
    # Get the messages by chatroom id
    messages = Chatroom.where(tag: params[:tag])
    # Render the messages as json
    render json: {
      code: 200,
      data: messages
    }
  end

  def create
    data = JSON.parse(request.body.read)
    # create user if not exist
    user = User.find_or_create_by(username: data['username'])
    # create chatroom if not exist
    chatroom = Chatroom.find_or_create_by(tag: data['tag'])

    render json: {
      code: 201,
      data: chatroom
    }
  end

  private

  def chatroom_params
    # Get the chatroom params
    params.require(:chatroom).permit(:tag)
  end
end