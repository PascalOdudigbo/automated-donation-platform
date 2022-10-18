class CharitySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :approved
end
