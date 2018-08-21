def fibonacci_iterative(n)
  a = 1
  b = 1

  while n > 1 # base case
    a, b = b, a+b # parallel assignment
    n -= 1 # move toward base case
  end

  a
end

require 'pry'
binding.pry