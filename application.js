var express = require('express');
var app = express.createServer();
var db = require('./src/model/db');
var product = require('./src/model/product')(db);

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/products.json', function(req, res) {
  product.findAll(function(err, result) {
    res.json({products: result});
  });
});

app.listen(3000);

console.log('Express server started on port %s', app.address().port);
