require "rails_helper"

RSpec.describe AdministratorsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/administrators").to route_to("administrators#index")
    end

    it "routes to #show" do
      expect(get: "/administrators/1").to route_to("administrators#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/administrators").to route_to("administrators#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/administrators/1").to route_to("administrators#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/administrators/1").to route_to("administrators#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/administrators/1").to route_to("administrators#destroy", id: "1")
    end
  end
end
