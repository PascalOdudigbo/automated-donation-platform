class CharityBeneficiary < ApplicationRecord
  belongs_to :charities
  belongs_to :beneficiaries
end
