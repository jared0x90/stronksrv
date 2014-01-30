/*

stronk server
=============

Public TCP Ports Used

80 : HTTP public
81 : API public
82 : Static public


*/

var connect = require('connect');
connect.createServer(
    connect.static(__dirname + "/static/")
).listen(82);


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, '0.0.0.0');

var api = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  // Default to no error.
  jsrp = {
    "error": false,

  };
  res.write(JSON.stringify(jsrp));
  res.end();
}).listen(81, '0.0.0.0');

