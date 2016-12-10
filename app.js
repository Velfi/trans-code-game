var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'public/static/index.html'));
});


app.get(/^(.+)$/, function(req, res) {
    res.sendfile(path.join(__dirname, 'public/static/' + req.params[0]));
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
});
