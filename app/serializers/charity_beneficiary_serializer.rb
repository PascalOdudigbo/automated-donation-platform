class CharityBeneficiarySerializer < ActiveModel::Serializer
  attributes :id, :charity_id
  # has_one :charities
  has_many :beneficiary, serializer: BeneficiarySerializer
end
