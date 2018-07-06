require 'pry' 

class Actor
  def initialize
    
  end

  def award_speech
    "I would like to thank my parents and my agent. We did it baby!"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember that anyway"
  end
end

class MarxBrother < Actor # MarxBrother Inherits from Actor
  # macro writes an @name, @instrument and @vice getter and setter for you
  attr_accessor :name, :instrument, :vice 

  def initialize(n='', i='', v='')
    @name = n
    @instrument = i
    @vice = v      
  end

  def play
    "My name is #{@name} and I play the #{@instrument}"
  end
end

class Stooge < Actor
  def initialize
  end

  def terrible?
    true
  end
end
groucho = MarxBrother.new "Groucho Julius Marx", "Guitar", "Cigars"

harpo = MarxBrother.new 'Harpo Marx', 'harp', 'mutism'


binding.pry