class Donor < ApplicationRecord
  has_secure_password
  has_many :donations
  has_many :charities, through: :donations
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { in: 8..16 }
end
