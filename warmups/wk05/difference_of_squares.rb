require 'pry'

class Squares

  def initialize num
    @num = num
    @range = (1..num).to_a
  end

  def square_of_sum
    num = @range.reduce do |memo,n|
      memo += n
    end

    num * num
  end

  def sum_of_squares
    @range.reduce do |memo,n|
      memo += n*n
    end
  end

  def difference_of_squares
    square_of_sum - sum_of_squares
  end

end


# pry