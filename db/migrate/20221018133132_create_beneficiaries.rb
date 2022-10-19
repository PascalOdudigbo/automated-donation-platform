class CreateBeneficiaries < ActiveRecord::Migration[6.1]
  def change
    create_table :beneficiaries do |t|
      t.string :name
      t.text :location
      t.text :description

      t.timestamps
    end
  end
end
