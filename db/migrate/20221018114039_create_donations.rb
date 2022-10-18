class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.references :donors, null: false, foreign_key: true
      t.references :charities, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
