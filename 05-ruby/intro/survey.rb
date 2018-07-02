## Basic Ruby Interaction and Coding.
# Initital greeting

puts "Welcome to the survey."
print "What is your Name? : "

name = gets.chomp # user input

# name = name.chomp #.chomp removes the last new line from the end of a string

# print out the name
puts "\nHello #{ name }."

print "What is your Surname? : "

surname = gets.chomp

puts "\nSo, your full name is #{name} #{surname}?"

print "Where do you live, #{name}? : "
address = gets.chomp

puts "\nThanks! So to confirm, your name is #{ name + ' ' + surname } and you live in #{ address }?"
