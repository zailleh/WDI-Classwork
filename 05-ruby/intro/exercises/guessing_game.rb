puts "Let's play a game!"
print "We're going to play a guessing game. What's the biggested number you're willing to guess? : "
max = gets.to_i

SECRET_NUMBER = Random.rand 1..max
print "Ok, lets go. Guess the number - "
print "it's between 0 and #{ max }. : "
guess = gets.to_i

until guess == SECRET_NUMBER

  if guess > SECRET_NUMBER
    print "\nNope! Lower... : "
  else
    print "\nNope! Higher... : "
  end

  guess = gets.to_i
end

puts "\nYou guessed it!"
