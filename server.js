var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3100;


var random = require('./modules/random.js')
var usd = require('./modules/usd.js')
var twofun = require('./modules/twofun.js')

app.use(express.static('public'));

app.get('/balance', function(request, response){
  response.send(twofun.finalBalance());
});

app.listen(port, function onServerListen(){
  console.log('Started express server on port ', port);
  console.log('Press Ctrl-C to stop');
});
