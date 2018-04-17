var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

app = express(); 
app.use('/', express.static(__dirname + '/'));
app.listen(3000);

request({
	method: 'GET',
	url: 'http://localhost:3000'
}, function (err, res, body) {
	if(err) {
		console.log(err);
	} else {
		console.log(body);
	}
});