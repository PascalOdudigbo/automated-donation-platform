class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount
  has_one :donors
  has_one :charities
end
