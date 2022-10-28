class Story < ApplicationRecord
    belongs_to :beneficiary
    belongs_to :charity
    belongs_to :inventory
end
