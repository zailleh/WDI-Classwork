require 'pry'


# I've been quite nice and provided the skeleton of the solution. All you have to do is write the code.
# You can use regex.

class WordProblem
  # The test will generate a new instance of this class

  def initialize question
   @question = question
   get_parts
  end

  def answer
    # go through each part and return the code version of the operator
    expression = @parts.map do |op|
      case op
      when /\d+/
        op
      when /plus/i
        "+"
      when /times|multiplied/i
        "*"
      when /divided|divide/i
        "/"
      when /minus|subtract/i
        "-"
      when /cubed/i
        "** 3"
      end
    end
    # make expression, eg ["1","+","1"] into a string "1 + 1", then evaulate as code
    eval(expression.join(' '))
  end

  private
    def get_parts
      regex = /plus|times|divided|multiplied|multiply|minus|subtract|cubed|-?\d+/i
      @parts = @question.scan(regex)
    end
end
