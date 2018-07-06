# There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
# Find how many of each nucleotides are in a string that you pass in to a function
require 'pry'

$NUCLEOTIDES = 'ACGTU'

def find_nucleotides ( str )
  nucleotides = {}

  str.upcase.chars.each do |char|
    if $NUCLEOTIDES.include? char
      count = nucleotides[char]
      nucleotides[char] = count == nil ? 1 : count + 1
    end
  end

  if nucleotides.keys.length == 0
    return "There are no nucleotides in your string!"
  else
    return nucleotides
  end
end

binding.pry # Start pry