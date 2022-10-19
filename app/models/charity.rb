class Charity < ApplicationRecord
    has_many :donations
    has_many :donors, through: :donations
    has_many :charity_beneficiaries
    has_one :charity_profile
end
