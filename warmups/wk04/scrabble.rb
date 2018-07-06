require 'pry'


@LETTER_SCORES = {
  'A, E, I, O, U, L, N, R, S, T' => 1,
  'D, G'                         => 2,
  'B, C, M, P'                   => 3,
  'F, H, V, W, Y'                => 4,
  'K'                            => 5,
  'J, X'                         => 8,
  'Q, Z'                         => 10
}

def score_word ( word, multipliers )
  score = 0

  word.upcase.chars.each_with_index do |letter,i| 
    @LETTER_SCORES.keys.each do |key| 
      if key.include? letter
        letter_score = @LETTER_SCORES[key]
        if !multipliers[i].nil?
          case multipliers[i]
          when :triple_letter 
            letter_score *= 3
            puts "Triple Letter Score! *** #{ letter }"
          when :double_letter then letter_score *= 2
            puts "Double Letter Score! *** #{ letter }"
          end
        end
        score += letter_score
        break
      end
    end
  end

  if !multipliers[-1].nil? && multipliers[-1] == :triple_word
    score *= 3
    puts "Triple Word Score!!"
  elsif !multipliers[-1].nil? && multipliers[-1] == :double_word
    score *= 2
    puts "Double Word Score!!"
  end

  score
end


def place_word ( word )
  multipliers = {}
  
  if word.length > 5
    multipliers[Random.rand 1..word.length] = :triple_letter
  else
    multipliers[Random.rand 1..word.length] = :double_letter
  end

  if word.length == 3
    multipliers[-1] = :triple_word
  elsif word.length < 3
    multipliers[-1] = :double_word
  end

 score_word word, multipliers

end


pry