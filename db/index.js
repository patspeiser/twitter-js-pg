var pg = require('pg');
var postgresUrl = 'postgres://postgres@localhost/twitterdb';
var client = new pg.Client(postgresUrl);

client.connect();

module.exports = client;


