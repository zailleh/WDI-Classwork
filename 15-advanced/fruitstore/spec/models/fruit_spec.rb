# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  type       :string
#

require 'rails_helper'

RSpec.describe Fruit, type: :model do

  it { should belong_to(:shelf) }

  describe "An Apple" do
    before do 
      @apple = Apple.create :name => 'Granny Smith'
    end

    it "should not be squishy" do
      expect(@apple.squishy?).to be false
    end

    it "should remember the class using Single Table Inheritance" do
      apple = Fruit.find @apple.id
      expect(apple.type).to_not be_nil
      expect(apple.class).to eq Apple
      expect(apple).to eq @apple
      expect(apple.is_a?(Fruit)).to be true
      expect(apple.class.ancestors).to include(Fruit)
    end
  end

  describe "A Pear" do
    before do
      @pear = Pear.create :name => 'Fuji'
    end

    it "should be squishy" do
      expect(@pear.squishy?).to be true
    end

    it "should remember the class using Single Table Inheritance" do
      pear = Fruit.find @pear.id
      expect(pear.type).to_not be_nil
      expect(pear.class).to eq Pear
      expect(pear).to eq @pear
      expect(pear.is_a?(Fruit)).to be true
      expect(pear.class.ancestors).to include(Fruit)
    end
  end
end
