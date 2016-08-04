var pg = require('pg');
var postgresUrl = 'postgres://postgres@localhost/twitterdb';
var _client;

module.exports = {
	connect: function(cb){
		if(_client) {
			cb(_client);
		}
		var client = new pg.Client(postgresUrl);
		client.connect(function(err){
			if (err) throw 'error connecting';
			_client = client;
			cb(_client);
		});
	},
	query: function(qry, params,cb){
		this.connect(function(db){
			db.query(qry, params, function (err, results) {
				if (err) throw err;
				cb(results);
			})
		})
	}
};


