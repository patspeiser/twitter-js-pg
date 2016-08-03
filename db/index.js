var pg = require('pg');
var postgresUrl = 'postgres://postgres@localhost/twitterdb';
var client = new pg.Client(postgresUrl);

var config = {
	user: 'postgres',
	database: 'twitterdb',
	port: 5432,
	max: 10,
}

client.connect();

module.exports = client;
