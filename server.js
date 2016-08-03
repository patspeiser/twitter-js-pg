var db = require('./db');
var http = require('http');

var server = http.createServer(require('./app'));

server.listen(3000)
