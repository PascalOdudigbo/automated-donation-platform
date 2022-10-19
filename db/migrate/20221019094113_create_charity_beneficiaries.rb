class CreateCharityBeneficiaries < ActiveRecord::Migration[6.1]
  def change
    create_table :charity_beneficiaries do |t|
      t.references :charity, null: false, foreign_key: true
      t.references :beneficiary, null: false, foreign_key: true

      t.timestamps
    end
  end
end
