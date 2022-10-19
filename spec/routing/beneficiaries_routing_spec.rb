require "rails_helper"

RSpec.describe BeneficiariesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/beneficiaries").to route_to("beneficiaries#index")
    end

    it "routes to #show" do
      expect(get: "/beneficiaries/1").to route_to("beneficiaries#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/beneficiaries").to route_to("beneficiaries#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/beneficiaries/1").to route_to("beneficiaries#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/beneficiaries/1").to route_to("beneficiaries#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/beneficiaries/1").to route_to("beneficiaries#destroy", id: "1")
    end
  end
end
