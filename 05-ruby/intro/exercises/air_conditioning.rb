# require "pry" # Install the gem with "gem install pry"

print "What's the temperature at the moment? : "
temp = gets.to_f # get the temperature and convert from string to int

print "Is the A/C functional? (y/n): "
ac_on = gets.chomp.upcase[0] # get the input and convert to uppercase and get first char.

print "What would you like the temperature to be? : "
desired_temp = gets.to_f # get desired temp and convert from string to int

# binding.pry # pause at this point. equivalent to 'debugger;' in JS

if ac_on == 'Y' && temp > desired_temp
  puts "Turn on the A/C please."
elsif ac_on != 'Y' && temp > desired_temp
  puts "Fix the A/C now! It's hot!"
elsif ac_on != 'Y' && temp < desired_temp
  puts "Fix the A/C whenever you have the chance... It's cool..."
end
