require 'minitest/autorun'
require 'minitest/pride'
require_relative 'difference_of_squares'


class DiffereceOfSquaresTest < Minitest::Test
  def test_square_of_sum_1
    assert_equal 0, Squares.new(1).difference_of_squares
  end

  def test_square_of_sum_2
    assert_equal 4, Squares.new(2).difference_of_squares
  end

  def test_square_of_sum_3
    # skip
    assert_equal 22, Squares.new(3).difference_of_squares
  end

  def test_square_of_sum_4
    # skip
    assert_equal 70, Squares.new(4).difference_of_squares
  end

  def test_square_of_sum_5
    skip
    assert_equal 0, Squares.new(5).difference_of_squares
  end
end