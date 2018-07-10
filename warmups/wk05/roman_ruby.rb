require 'pry'


def arabic_to_roman ( num )

  thousands = num / 1000
  five_hunds = num % 1000 / 500
  hundreds = num % 500 / 100
  fifties = num % 100 / 50
  tens = num % 50 / 10
  fives = num % 10 / 5
  ones = num % 5

  i = if ones == 4 && fives == 0
    "IV"
  elsif fives == 1 && ones == 4
    ""
  else
    "I" * ones
  end

  v = if fives == 1 && ones == 4
    "IX"
  else 
    "V" * fives
  end

  x = if fifties == 0 && tens == 4
    "XL"
  elsif fifties == 1 && tens == 4
    ""
  else
    "X" * tens
  end

  l = if fifties == 1 && tens == 4
    "XC"
  else
    "L" * fifties
  end

  c = if five_hunds == 0 && hundreds == 4
    "CD"
  elsif five_hunds == 1 && hundreds == 4
    ""
  else
    "C" * hundreds
  end

  d = if five_hunds == 1 && hundreds == 4
    "CM"
  else
    "D" * five_hunds
  end

  m = "M" * thousands

  roman = m + d + c + l + x + v + i

  roman
end




pry