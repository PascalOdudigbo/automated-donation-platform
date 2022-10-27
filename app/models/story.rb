class Story < ApplicationRecord
    belongs_to :beneficiaries
    belongs_to :charities
end
