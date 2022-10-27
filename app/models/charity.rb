class Charity < ApplicationRecord
  has_secure_password
  has_many :donations
  has_many :donors, through: :donations
  has_many :charity_beneficiaries
  has_many :beneficiaries, through: :charity_beneficiaries
  has_many :stories, through: :beneficiaries
  has_many :inventories
  has_one :charity_profile
  has_many :inventories
end
