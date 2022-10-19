class Donor < ApplicationRecord
    has_many :donations
    has_many :charities, through: :donations
    validates :first_name, presence: true 
    validates :last_name, presence: true
    validates :password_digest, length: { in: 8..16 }
end
