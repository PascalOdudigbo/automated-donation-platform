class CreateDonors < ActiveRecord::Migration[6.1]
  def change
    create_table :donors do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :country
      t.boolean :anonymous

      t.timestamps
    end
  end
end
