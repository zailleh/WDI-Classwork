require "pry"
# # Array and Hash access

# ### A. Given the following data structure:

# ```ruby
# a = ["Anil", "Erik", "Jonathan"]
# ```




a = ["Anil", "Erik", "Jonathan"]
# 1. How would you return the string `"Erik"`?
p a[1] 
# 1. How would you add your name to the array?
a << "Tim"


# ### B. Given the following data structure:

# ```ruby
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# ```
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# 1. How would you return the string `"One"`?
p h[1]

# 1. How would you return the string `"Two"`?
p h[:two]

# 1. How would you return the number `2`?
p h["two"]

# 1. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"

# 1. How would you add `{:four => 4}` to the hash?
h[:four] = 4

p h

# ### C. Given the following data structure:

# ```ruby
# is = {true => "It's true!", false => "It's false"}
# ```


is = {true => "It's true!", false => "It's false"}

# 1. What is the return value of `is[2 + 2 == 4]`?
"It's true!"
puts is[2 + 2 == 4]
# 1. What is the return value of `is["Erik" == "Jonathan"]`?

"It's false"
# 1. What is the return value of `is[9 > 10]`?
"It's false"
# 1. What is the return value of `is[0]`?
nil
# 1. What is the return value of `is["Erik"]`?
nil

# ### D. Given the following data structure:

# ```ruby
# users = {
#   "Jonathan" => {
#     :twitter => "tronathan",
#     :favorite_numbers => [12, 42, 75],
#   },
#   "Erik" => {
#     :twitter => "sferik",
#     :favorite_numbers => [8, 12, 24],
#   },
#   "Anil" => {
#     :twitter => "bridgpal",
#     :favorite_numbers => [12, 14, 85],
#   },
# }
# ```

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
puts users.dig( "Jonathan", :twitter )
# 1. How would you add the number `7` to Erik's favorite numbers?
users["Jonathan"][:favorite_numbers] << 7

# 1. How would you add yourself to the users hash?
users["Tim"] = {
  :twitter => "stuff",
  :favorite_numbers => [12]
}

# 1. How would you return the array of Erik's favorite numbers?
puts users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?
puts users["Erik"][:favorite_numbers].sort[0]
# puts users["Erik"][:favorite_numbers].min

# 1. How would you return an array of Anil's favorite numbers that are also even?
puts users["Anil"][:favorite_numbers].select { |n| n.even? }
# puts users["Anil"][:favorite_numbers].select(&:even?)

# 1. How would you return an array of the favorite numbers common to all users?
# favourite_numbers = []

# users.each_value do |v|
#   favourite_numbers += v[:favorite_numbers]
#   favourite_numbers = favourite_numbers & v[:favorite_numbers]
# end

# p favourite_numbers

# users.map { |name, user| user[:favorite_numbers]}.inject{ |a,b| a & b }
users.map { |name, user| user[:favorite_numbers]}.inject(&:&)

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
# unique_favorites = []

# users.map_values do |v| 
#   unique_favorites += v[:favorite_numbers]
# end

# unique_favorites.uniq!.sort!

users.map { |k,v| v[:favorite_numbers]}.flatten.uniq.sort

p unique_favorites

binding.pry