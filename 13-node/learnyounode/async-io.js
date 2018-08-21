var fs = require('fs');


const path = process.argv[2]

fs.readFile(path, 'UTF-8', (err, data) => {
  console.log((data.match(/\n/g) || []).length);
})