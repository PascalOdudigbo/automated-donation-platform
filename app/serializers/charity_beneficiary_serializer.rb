class CharityBeneficiarySerializer < ActiveModel::Serializer
  attributes :id
  has_one :charities
  has_one :beneficiaries
end
