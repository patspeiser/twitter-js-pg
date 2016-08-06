var express = require('express');
var app = express();
var client = require('./db');
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
		client.query('SELECT * FROM tweets', function (err, result) {
				if (err) return next(err); // pass errors to Express
				var tweets = result.rows;
				res.render('index', { title: 'Twitter.js', tweets: tweets });
			});
});

// for all request to /tweets user router
app.use('/tweets', tweets);

module.exports = app;


