class Beneficiary < ApplicationRecord
    has_many :inventories, dependent: :destroy
    has_many :stories, dependent: :destroy
    has_many :charity_beneficiaries, dependent: :destroy
    has_many :charities, through: :charity_beneficiaries
end
