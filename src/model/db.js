var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;

var connect = function() {
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('products', server);

  db.open(function(err, db) {
    if(err) {
      throw {
        error: err,
        message: "An error occurred while opening the connection to the db"
      };
    } else {
      console.log("The connection to db was opened successfully"); 
    }
  });
};

connect();
