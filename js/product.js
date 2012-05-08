function ProductController($scope) {
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

  var truncate = function(string, length) {
    if(string.length > length) {
      return string.substring(0, length) + "...";
    } else {
      return string;
    }
  };

  $scope.products = function() {
    _.each(products, function(product) {
      product.title = truncate(product.title, 45);
      product.price = accounting.formatMoney(product.price);
      product.description = truncate(product.description, 73);
    });
    return products;
  }();
}
