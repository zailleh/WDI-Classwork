require 'pry'

class String

  # The Atbash cipher is a simple substitution cipher that 
  # relies on transposing all the letters in the alphabet 
  # such that the resulting alphabet is backwards.
  # Plain:  abcdefghijklmnopqrstuvwxyz
  # Cipher: zyxwvutsrqponmlkjihgfedcba
  def atbash_codec
    output = "" 

    # get our cipher data
    alphabet = ('a'..'z').to_a
    cipher = alphabet.reverse
    
    # convert each letter (preserve case)
    self.downcase.chars.each_with_index do |c,i|
      letter = cipher[alphabet.find_index(c)]
      output << if self[i] == self[i].upcase
        letter.upcase
      else
        letter
      end
    end

    #return the result
    output
  end

  def atbash!
    replace(self.atbash)
  end
end

pry