require 'pry'



class Integer

  def luhn_sum
    num = self.to_s.chars

    sum = 0
    
    num.reverse.each_with_index do |n,i|
      n = n.to_i
      n *= 2 if i % 2 == 1
      n -= 9 if n >= 10

      sum += n
    end
    sum
  end

  def luhn_valid?
    sum = luhn_sum
    
    if sum % 10 == 0
      true
    else
      false
    end

  end

  def make_valid_luhn
    if luhn_valid?
      puts "Already Valid"
      self
    else 
      num = self*10
      num + (num.luhn_sum * 9).to_s[-1].to_i
    end
  end
end


pry