class Charity < ApplicationRecord
  has_secure_password
  has_many :donations, dependent: :destroy
  has_many :donors, through: :donations
  has_many :charity_beneficiaries, dependent: :destroy
  has_many :beneficiaries, through: :charity_beneficiaries, dependent: :destroy
  has_many :stories, through: :beneficiaries, dependent: :destroy
  has_many :inventories, dependent: :destroy
  has_one :charity_profile, dependent: :destroy
end
