class MessagesController < ApplicationController
  def index
    # Get all messages
    messages = Message.all
    # Render the messages as json
    render json: {
      code: 200,
      data: messages
    }
  end

  def create
    # Create a new message from request body
    data = JSON.parse(request.body.read)
    message = Message.new(content: data['content'], chatrooms_id: data['chatrooms_id'], users_id: data['users_id'])
    # Render the message as json
    render json: {
      code: 201,
      data: message
    }
  end

  private

  def message_params
    # Get the params for the message
    params.require(:message).permit(:content, :chatroom_id, :user_id)
  end
end