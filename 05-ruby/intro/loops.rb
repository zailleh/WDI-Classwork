# while something
#   do stuff
# end

# While Loop
i = 0
while i < 5 # conditional
  puts "i: #{ i }"
  i += 1 # update
end


# until loop
i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end


# ITERATORZ
5.times do
  puts "omg"
end

# Iterator with a one line block
5.times { puts "ZOMG" }

# Iterator with index
5.times do |i|
  puts "i: #{ i }"
end

5.times { |i| puts "i: #{ i }" }

5.downto(0) do |j|
  puts "j #{ j }"
end
