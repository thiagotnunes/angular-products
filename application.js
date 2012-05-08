var express = require('express');
var app = express.createServer();

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

var products = [
  {
    thumbnail: "img/products/ferrari.jpg",
      profile: "img/profiles/me.png",
      title: "Ferrari",
      description: "This is a freaking ferrari dude you should totally buy it",
      ratings: "100 ratings",
      reviews: "1 reviews",
      price: "3000000.00"
  },
  {
    thumbnail: "img/products/carrera.jpg",
    profile: "img/profiles/me.png",
    title: "Carrera",
    description: "This is just awesome dude, I am just so happy I have one and you don't",
    ratings: "300 ratings",
    reviews: "300 reviews",
    price: "400000.00"
  },
  {
    thumbnail: "img/products/aventador.jpg",
    profile: "img/profiles/me.png",
    title: "El aventador",
    description: "Yo tengo un aventador and it freaking rules. Wanna have it? Buy it!",
    ratings: "6000 ratings",
    reviews: "10 reviews",
    price: "600000.00"
  }
];

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/products.json', function(req, res) {
  res.json({ products: products });
});

app.listen(3000);

console.log('Express server started on port %s', app.address().port);
