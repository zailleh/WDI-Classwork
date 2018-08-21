require 'pry'

def factorial_recursive(num)
  if num > 1
    num * factorial_recursive(num - 1)
  else
    1
  end
end

pry