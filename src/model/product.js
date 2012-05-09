module.exports = function(db) {
  var findAll = function(callback) {
    db.collection('products', function(err, collection) {
      collection.find().toArray(callback);
    });
  };

  return {
    findAll: findAll
  };
};
