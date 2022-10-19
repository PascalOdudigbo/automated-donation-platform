class Administrator < ApplicationRecord
    validates :first_name, presence: true 
    validates :last_name, presence: true
    validates :password_digest, length: { in: 8..16 }
end
