require 'minitest/autorun'
require_relative 'playlist'

class PlaylistTest < Minitest::Test
  def initialize stuff
    super stuff
    @playlist = ["Be True To Your School", "Raining Blood", "Little Deuce Coupe", "Angel of Death", "South of Heaven", "California Girls", "Dead Skin Mask", "Good Vibrations", "Surfin USA", "Hell Awaits"]
  end

  # "Be True To Your School" to "Angel of Death" is 3 (3 clicks of the Next button)
  def test_3_clicks_next
    assert_equal(
      { :clicks => 3, :direction => "Next"}, 
      find_song(@playlist, "Be True To Your School", "Angel of Death")
    )
  end
  
  # "Good Vibrations" to "Dead Skin Mask" is 1 (1 ckick of the Previous button)
  def test_1_clicks_prev
    assert_equal(
      { :clicks => 1, :direction => "Previous"}, 
      find_song(@playlist, "Good Vibrations", "Dead Skin Mask")
    )
  end

  # "Surfin USA" to "Raining Blood" is 3 (3 clicks of the Next button)
  def test_3_clicks_next_around_end
    assert_equal(
      { :clicks => 3, :direction => "Next"}, 
      find_song(@playlist, "Surfin USA", "Raining Blood")
    )
  end

  def test_will_return_when_song_not_valid
    assert_raises RuntimeError do
      find_song(@playlist, "Blah", "Raining Blood")
    end
  end
end