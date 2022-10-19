require "rails_helper"

RSpec.describe CharityBeneficiariesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/charity_beneficiaries").to route_to("charity_beneficiaries#index")
    end

    it "routes to #show" do
      expect(get: "/charity_beneficiaries/1").to route_to("charity_beneficiaries#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/charity_beneficiaries").to route_to("charity_beneficiaries#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/charity_beneficiaries/1").to route_to("charity_beneficiaries#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/charity_beneficiaries/1").to route_to("charity_beneficiaries#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/charity_beneficiaries/1").to route_to("charity_beneficiaries#destroy", id: "1")
    end
  end
end
