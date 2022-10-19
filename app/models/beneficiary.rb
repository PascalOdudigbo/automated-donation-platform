class Beneficiary < ApplicationRecord
    has_many :inventories
    has_many :charity_beneficiaries
    has_many :charities, through: :charity_beneficiaries
end
