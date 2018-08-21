require 'pry'
#  100 random sorted numbers
a = Array.new(100) { rand(1..200) }.sort


def binary_search(haystack, needle)
  
  lower_bound = 0
  upper_bound = haystack.size
  size = upper_bound - lower_bound
  index = size / 2 + lower_bound

  item = haystack[index];
  while item != needle && size > 2
    if item < needle # item is in upper half of the array
      lower_bound = index
    else # item is in lower half of the array
      upper_bound = index
    end
    # puts "number is between #{ lower_bound } and #{ upper_bound }"
    size = upper_bound - lower_bound
    index = size / 2 + lower_bound
    item = haystack[index]
  end

  if haystack[index] != needle
    index += 1
    if haystack[index] == needle
      # puts "checked found #{needle} in haystack at #{ index } which had value #{haystack[index]}"
    else
      # puts "couldn't find #{needle} in haystack"
      false
    end
  else
    # puts "found #{needle} in haystack at #{ index } which had value #{haystack[index]}"
    index
  end
end

# pp a
puts (binary_search a, 75)