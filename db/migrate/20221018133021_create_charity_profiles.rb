class CreateCharityProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :charity_profiles do |t|
      t.references :charities, null: false, foreign_key: true
      t.text :about_us

      t.timestamps
    end
  end
end
