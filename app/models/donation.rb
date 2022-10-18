class Donation < ApplicationRecord
  belongs_to :donors
  belongs_to :charities
end
