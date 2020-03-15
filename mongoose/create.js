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
const product = new Product({ name: 'Camera', qty: 20 });
product.save((error) => {
  if (error) {
    return console.log(`Error has occurred: ${error}`);
  }
  console.log('Document is successfully saved.');
});





//db.close()
