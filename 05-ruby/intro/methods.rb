require 'pry'


# ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ #
#      M E T H O D S
# ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ #

## basic method with no parameters
def hello
  puts "Hello"
end


## basic function with parameters that have a default
def sayHello( name="Stranger", adjective="stinky" )
  puts "Hello #{ adjective } #{ name }"
  "hotdogs hotdogs hotdogs"
end

## basic function with implicit return
def add(a, b)
  a + b # implicit return
end



binding.pry
