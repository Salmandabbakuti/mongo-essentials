const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

mongoose.connect('<mongodb url>', { useUnifiedTopology: true, useNewUrlParser: true },);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: String,qty:Number
});
var Product = mongoose.model('products',productSchema );


app.get('/api/read/', async function (req, res) {
    
try{
  Product.find(req.query, function (error, documents) { // if no query passed, it will return all docs in collection
  res.send(documents)
  });
}catch (err) {
    res.status(500).send(err)
  }    
})

app.post('/api/create/', async function (req, res) {
    
try{
let product = new Product(req.body)
await product.save() 
res.send("Document Created..")
}catch (err) {
    res.status(500).send(err)
  }    
})
app.put('/api/update/', async function (req, res) {
    
try{
let query = {}
query.name = req.body.name
let isExists = await Product.updateOne(query, req.body,{findAndModify:false})
if (!isExists.n==1){
  res.status(404).send("No item found")
  return
   }
  res.send("Document Updated..")
}catch (err) {
    res.status(500).send(err)
  }    
})

app.delete('/api/delete/', async function (req, res) {
    
try{
let isExists = await Product.deleteOne(req.body)
if (!isExists.n==1) {
  res.status(404).send("No item found") //n value will be 1 if item found and updated
  return
}
res.status(200).send("Deleted Document Successfully.")
}catch (err) {
    res.status(500).send(err)
  }    
})
app.put('/api/updateAll/', async function (req, res) {
    
try{
let isExists = await Product.updateMany(req.body)
if (!isExists.n==1) {
  res.status(404).send("No items found") //n value will be 1 if item found and updated
  return
}
res.status(200).send("Updated Documents Successfully.")
}catch (err) {
    res.status(500).send(err)
  }    
})
app.delete('/api/deleteAll/', async function (req, res) {
    
try{
let isExists = await Product.deleteMany(req.body)
if (!isExists.n==1) {
  res.status(404).send("No items found") //n value will be 1 if item found and updated
  return
}
res.status(200).send("Deleted Documents Successfully.")
}catch (err) {
    res.status(500).send(err)
  }    
})
app.listen(3000, () => { console.log('Server is running at 3000..') });
