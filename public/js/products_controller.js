function ProductsController($scope, $http) {
  var truncate = function(string, length) {
    if(string.length > length) {
      return string.substring(0, length) + "...";
    } else {
      return string;
    }
  };

  $scope.fetchProducts = function() {
    $http.get('/products.json').success(function(data) {
      $scope.products = data.products;
      _.each($scope.products, function(product) {
        product.title = truncate(product.title, 45);
        product.price = accounting.formatMoney(product.price);
        product.description = truncate(product.description, 73);
      });
    });
  }();
}
