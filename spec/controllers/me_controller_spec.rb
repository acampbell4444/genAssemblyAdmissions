require 'rails_helper'

RSpec.describe MeController, type: :controller do
  describe "GET bio" do
    it "renders the bio template" do
      get :bio
      expect(response).to render_template("bio")
    end
  end

  describe "GET pictures" do
    it "renders the pictures template" do
      get :pictures
      expect(response).to render_template("pictures")
    end
  end

  describe "GET contact" do
    it "renders the contact template" do
      get :contact
      expect(response).to render_template("contact")
    end
  end


end
