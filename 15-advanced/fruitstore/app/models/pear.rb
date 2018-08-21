# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  type       :string
#

class Pear < Fruit
  def squishy?
    true
  end
end
