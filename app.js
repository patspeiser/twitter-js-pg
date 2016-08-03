var express = require('express');
var app = express();
var db = require('./db');
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
module.exports = app;
