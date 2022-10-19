class InventorySerializer < ActiveModel::Serializer
  attributes :id, :item, :quantity
  has_one :benefeciaries
  has_one :charities
end
