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
Product.deleteOne({name:"Camera",qty:{$lte:10}},(error) => { //deletes one document that named "Camera" and qty is less than 10
  if (error) {
    return console.log(`Error has occurred: ${error}`);
  }
  console.log('Document is successfully Deleted');
});
Product.deleteMany({name:"Camera",qty:{$lte:10}},(error) => { ////deletes all documents that are named "Camera" and qty is less than 10
  if (error) {
    return console.log(`Error has occurred: ${error}`);
  }
  console.log('All Documents are successfully Deleted');
});
