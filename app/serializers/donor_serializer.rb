class DonorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :country
end
