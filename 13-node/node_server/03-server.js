const http = require('http');
const colors = require('colors');

const server = http.createServer( (request, response) => {
  console.log(`Request: ${request.method} ${request.url} FROM: ${request.remote}`.bgYellow);
  console.log(request);
  response.writeHeader(200, {'Content-Type': 'text/plain'});
  response.end('Hello World from a Node.js Server\n');
});

const port = 3000
console.log(`server running at http://localhost:${port}`.purple)
server.listen(port);
