class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.string :item
      t.integer :quantity
      t.references :beneficiary, null: false, foreign_key: true
      t.references :charity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
