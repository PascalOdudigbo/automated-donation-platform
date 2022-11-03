class CharityBeneficiary < ApplicationRecord
  belongs_to :charity
  belongs_to :beneficiary
end
