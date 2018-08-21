const fs = require('fs');

// fs.readFile(path,callback) 
// simple cat

// const data = fs.readFileSync('flinstones.txt')
// console.log(data.toString());

fs.readFile('flinstones.txt', function(err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data.toString());
  }
});
