var mongoose = require('mongoose');
mongoose.connect('<mongodb url>', { useUnifiedTopology: true, useNewUrlParser: true },);
var Schema = mongoose.Schema;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
var productSchema = new Schema({
  name: String,qty:Number
});
var Product = mongoose.model('products',productSchema );
Product.find({name:"Camera"}, function (error, documents) { // if no query passed, it will return all docs in collection
  console.log(documents);
});
Product.findOne({name:"Camera"}, function (error, documents) { // if no query passed, it will return all docs in collection
  console.log(documents);
});
Product.find({}, function (error, documents) { // if no query passed, it will return all docs in collection
  console.log(documents);
});
