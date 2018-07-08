require 'pry'

class Robot
  attr_reader :instruction_count

  def initialize
    @created = Time.now
    @instruction_count = 0
    self.reset
  end

  def name
    @instruction_count += 1
    @name
  end

  def timers
    @instruction_count += 1
    now = Time.now
    time_since_boot = now - @last_boot
    time_since_created = now - @created
    
    "#{time_since_boot.floor} seconds since last boot #{ time_since_created.floor } seconds since creation"
  end

  def reset
    @instruction_count += 1
    @last_boot = Time.now
    @name = (0..1).map { ('A'..'Z').to_a[rand(26)] }.join + (0..3).map { ('0'..'9').to_a[rand(10)] }.join
  end
end


pry