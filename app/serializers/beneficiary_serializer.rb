class BeneficiarySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description
end
