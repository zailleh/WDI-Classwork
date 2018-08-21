class Fibonacci 
  class << self
    def recursive_dumb(n)
      if (n > 2)
        recursive_dumb(n-1) + recursive_dumb(n-2)
      else 
        1
      end
    end

    def recursive_memo(n, memo = {})
      if (n > 2)
        if (memo[n]).nil?
          memo[n] = recursive_memo(n-1, memo) + recursive_memo(n-2, memo)
        else
          memo[n]
        end
      else 
        1
      end
    end

    def recursive_iter(n)
      sum = 0
      if (n > 2)
        2.upto n do |i|
          sum += recursive_iter(n-i)
        end
      else
        sum += 1
      end
      
      return sum
    end

    def enumerable(n)
      fib = Enumerator.new do |e|
        a = b = 1
        loop do
          e << a
          a, b = b, a + b
        end
      end

      fib.take(n).last
    end
  end
end