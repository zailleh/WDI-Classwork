require 'sinatra'
require 'sinatra/reloader'

puts "Please run this command in another terminal"
puts "brew install nmap"
puts "sudp nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
  scanlog = File.open 'scan.gnmap'
  
  @hosts = [] # IP Addresses

  scanlog.each do |line|
    next if line =~ /^#/ # Skip comments
    m = line.match(/(\d{1,3}\.){3,3}\d{1,3}/i)[0].to_s.strip # Capture the IP Address
    
    @hosts << m unless @hosts.last == m
  end

  erb :results
end