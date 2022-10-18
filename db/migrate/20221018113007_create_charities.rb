class CreateCharities < ActiveRecord::Migration[6.1]
  def change
    create_table :charities do |t|
      t.string :name
      t.text :address
      t.string :email
      t.string :password_digest
      t.boolean :approved

      t.timestamps
    end
  end
end
