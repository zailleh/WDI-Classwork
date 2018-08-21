# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  type       :string
#

class Fruit < ApplicationRecord
  belongs_to :shelf, :optional => true

  validates :name, :presence => true

  def squishy?
    false
  end
end
