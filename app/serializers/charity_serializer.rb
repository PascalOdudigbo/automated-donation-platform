class CharitySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :approved
  has_one :charity_profile
end
