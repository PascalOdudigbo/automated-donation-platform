class Beneficiary < ApplicationRecord
    has_many :inventories
    has_many :stories
    has_many :charity_beneficiaries, dependent: :destroy
    has_many :charities, through: :charity_beneficiaries
end
