var express = require('express');
var app = express();
var db = require('./db/db.js');
var swig = require('swig');
var tweets = require('./routes/tweets');

//configs
swig.setDefaults({ cached: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));

//default route
app.get('/', function(req, res){
		db.query('select * from tweets', [], function(err, results){
			if (err) throw err;
			res.render('index', { tweets: results });
		})
});

// for all request to /tweets user router
app.use('/tweets', tweets);

module.exports = app;


