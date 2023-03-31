class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.references :chatrooms, null: false, foreign_key: true, column_name: :chatroom_id
      t.references :users, null: false, foreign_key: true, column_name: :user_id

      t.timestamps
    end
  end
end
