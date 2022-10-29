class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :anonymous, :created_at
  has_one :donor
  has_one :charity
end
