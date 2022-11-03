class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
        t.string :title
        t.text :beneficiary_story
        t.references :beneficiary, null: false, foreign_key: true
        t.references :charity, null: false, foreign_key: true
        t.references :inventory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
