class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.string :item
      t.integer :quantity
      t.references :beneficiaries, null: false, foreign_key: true
      t.references :charities, null: false, foreign_key: true

      t.timestamps
    end
  end
end
