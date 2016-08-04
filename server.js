var db = require('./db/db.js');
var http = require('http');

var server = http.createServer(require('./app'));

server.listen(3000)
