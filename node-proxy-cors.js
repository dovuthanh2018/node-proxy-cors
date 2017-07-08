/*
    NodeJS reverse proxy to make requests with CORS headers.
        1. node node-proxy-cors
        2. Make a request to http://localhost:8080/?url=http://www.someapi.com
*/
var express = require('express');
var request = require('request');

var app = express();

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//proxy
app.use('/', function(req, res) {
    var url = req.query.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(8080);