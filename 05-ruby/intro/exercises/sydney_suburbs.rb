print "What suburb do you live in? : "
suburb = gets.chomp.downcase

puts case suburb # woop woop - in ruby all statements evaluate to stuff!
when 'sydney'
  "You live in Sydney? How rich are you?!"
when 'surry hills'
  "Are you a hipster per chance?"
when 'parramatta'
  "That's not the real CBD you know..."
when 'bondi'
  "Let me guess: you surf?"
when 'redfern'
  "How many times have you been stabbed this year?"
else
  "That's cool..."
end
