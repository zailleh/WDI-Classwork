require 'pry'

def countdown_recursive(n)
  puts n

  if n == 0 
    puts "Blast off!"
  else 
    countdown_recursive(n-1)
  end
end

binding.pry