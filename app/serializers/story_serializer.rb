class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :beneficiary_story, :beneficiary_id, :charity_id, :inventory_id
end
