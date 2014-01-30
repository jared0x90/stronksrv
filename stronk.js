var connect = require('connect');
connect.createServer(
    connect.static(__dirname + "/static/")
).listen(8080);


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, '0.0.0.0');

var api = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

app_data = {
    "uid": 0,
    "user": 0,
    "rsa_passphrase": 0,
    "rsa_fingerprint": 0
}

  res.write(JSON.stringify(app_data));
  res.end();
}).listen(80, '0.0.0.0');

