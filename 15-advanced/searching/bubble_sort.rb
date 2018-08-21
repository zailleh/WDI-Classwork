a = Array.new(100) { rand(1..1000) }

def bubble_sort(haystack)
  sorted = Array.new(haystack)

  sorted.size.times do
    i = 0
    while(i < sorted.size-1) do
      this_num = sorted[i]
      next_num = sorted[i+1]
      
      if this_num > next_num
        sorted[i] = next_num
        sorted[i+1] = this_num
      end
      
      i+=1
    end
  end
  sorted
end

sorted = bubble_sort(a)
puts sorted == a.sort
# pp sorted