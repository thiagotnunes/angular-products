function ProductController($scope) {
  var products = [
    {
      thumbnail: "http://placehold.it/160x120",
      profile: "http://placehold.it/60x60",
      title: "This is the title and it should be aligned left",
      description: "This is the description and it should be below the title, with at least x characters",
      ratings: "x ratings",
      reviews: "x reviews",
      price: "30.00"
    }
  ];

  $scope.products = products;
}
