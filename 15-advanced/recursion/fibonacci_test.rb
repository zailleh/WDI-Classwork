require 'minitest/autorun'
require_relative 'fibonacci_r'


class FibonacciTest < Minitest::Test
  def test_dumb_recursive_works
    # skip
    assert_equal 55, Fibonacci::recursive_dumb(10)
  end

  def test_recursive_memo_works
    # skip
    assert_equal 144, Fibonacci::recursive_memo(12)
  end

  def test_recursive_iteration_works_for_5th
    # skip
    assert_equal 5, Fibonacci::recursive_iter(5)
  end

  def test_recursive_iteration_works_for_10th
    # skip
    assert_equal 55, Fibonacci::recursive_iter(10)
  end
  
  def test_recursive_iteration_works_for_12th
    # skip
    assert_equal 144, Fibonacci::recursive_iter(12)
  end

  def test_enumerable_works
    # skip
    assert_equal 55, Fibonacci::enumerable(10)
  end
end