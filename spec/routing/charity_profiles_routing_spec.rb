require "rails_helper"

RSpec.describe CharityProfilesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/charity_profiles").to route_to("charity_profiles#index")
    end

    it "routes to #show" do
      expect(get: "/charity_profiles/1").to route_to("charity_profiles#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/charity_profiles").to route_to("charity_profiles#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/charity_profiles/1").to route_to("charity_profiles#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/charity_profiles/1").to route_to("charity_profiles#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/charity_profiles/1").to route_to("charity_profiles#destroy", id: "1")
    end
  end
end
