//const http = require('http'); // import built-in http module
import http from 'http';
import path from 'path';

const hostname = '127.0.0.1';
const port = 3000;

console.log(__dirname);
//instantiate new http server and store a reference to it in "server"
const server: http.Server = http.createServer((req, res) => 
{
  res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

function()
{

}