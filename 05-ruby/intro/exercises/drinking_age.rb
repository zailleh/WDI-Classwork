print "What's your age? : "
age = gets.chomp.to_i #get age, remove trailing \n and convert to print

if age < 18
  puts "Sorry, you're too young to drink!"
else
  puts "Have at it!"
end
