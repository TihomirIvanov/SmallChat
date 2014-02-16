require 'spec_helper'


describe "messaging", :js => true do
  describe "adding name" do
    it "fill name form" do
      visit root_path
      fill_in "Your name", :with => "Tihomir"
      click_button "Send name"
      
      page.should have_content("Hello, Tihomir!")
    end
  end

  describe "post message" do
    it "fill name form" do
      visit root_path
      fill_in "Your name", :with => "Tihomir"
      click_button "Send name"
      
      fill_in "message_text", :with => "some new random message"
      click_button "Send"
      
      page.should have_content("Tihomir: some new random message")
    end
  end
end