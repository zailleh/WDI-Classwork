# lr.rb - Ruby line reader
# Usage: ruby lr.rb somefile.txt otherfile.txt

# Array of lines: Contents of filename arguments
ARGF.each do |line| 
  puts line if line =~ /(?=.*(F|f)red)(?=.*(W|w)ilma).*/
end