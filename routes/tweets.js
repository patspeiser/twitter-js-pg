var express = require('express');
var router = express.Router();
var db = require('../db');
/*
router.get('/', function(req,res){
	// display all tweets here
});
*/
router.get('/:user', function(req, res){
	// display all of this users tweets
});

router.post('/:tweet', function(req, res){
	// add a tweet here
});

module.exports = router;
