class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :beneficiary_story, :charity_id
  has_one :beneficiary
  has_one :inventory
end
