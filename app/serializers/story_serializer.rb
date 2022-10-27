class StorySerializer < ActiveModel::Serializer
  attributes :id, :beneficiary_story, :beneficiary_id, :charity_id, :inventory_id
end
