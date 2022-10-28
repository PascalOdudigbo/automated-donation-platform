class Inventory < ApplicationRecord
  belongs_to :beneficiary
  belongs_to :charity
  has_many :story
end
