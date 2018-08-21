def find_clicks(playlist, direction, current_song, target_song)
  start_index = playlist.index(current_song)
  list = playlist.clone
  clicks = 0
  
  while list[start_index] != target_song
    list.rotate! direction
    clicks += 1
  end

  return clicks
end

def find_song(playlist, current_song, target_song)
  if playlist.index(current_song).nil? || playlist.index(target_song).nil?
    puts "Couldn't find the songs you were looking for"
    raise "Not Found"
  else
    #test "Next" button
    next_clicks = find_clicks(playlist, 1, current_song, target_song)
    
    #test "Previous" button
    prev_clicks = find_clicks(playlist, -1, current_song, target_song)

    if next_clicks < prev_clicks
      puts "\nClick the Next button #{next_clicks} times"
      return {
        :clicks => next_clicks,
        :direction => "Next"
      }
    else
      puts "\nClick the Previous button #{prev_clicks} times"
      
      return {
        :clicks => prev_clicks,
        :direction => "Previous"
      }
    end
  end
end