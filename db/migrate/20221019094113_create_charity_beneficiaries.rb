class CreateCharityBeneficiaries < ActiveRecord::Migration[6.1]
  def change
    create_table :charity_beneficiaries do |t|
      t.references :charities, null: false, foreign_key: true
      t.references :beneficiaries, null: false, foreign_key: true

      t.timestamps
    end
  end
end
