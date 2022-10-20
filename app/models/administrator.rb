class Administrator < ApplicationRecord
     has_secure_password
    validates :first_name, presence: true 
    validates :last_name, presence: true
    validates :password, length: { in: 8..16 }
end
