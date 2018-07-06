require 'pry'

def ham ( strand_a, strand_b )
  ham_dist = 0
  new_str = ""

  strand_a.chars.each_with_index do |char,i|
    if char != strand_b[i]
      ham_dist += 1
      new_str += "^"
    else
      new_str += " "
    end
  end

  puts strand_a
  puts strand_b
  puts new_str
  puts "\nHamming Distance: #{ham_dist}"
end

puts "Call Ham with command: ham <strand_a>, <strand_b>"
puts "eg: ham 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'"
puts "will return:\n"
ham 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'
pry
