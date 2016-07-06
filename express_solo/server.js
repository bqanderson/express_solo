var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.use(express.static('public'));

app.listen(port, function onServerListen(){
  console.log('Started express server on port 3000');
  console.log('Press Ctrl-C to stop');
});
