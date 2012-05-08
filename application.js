var express = require('express');
var app = express.createServer();

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000);

console.log('Express server started on port %s', app.address().port);
