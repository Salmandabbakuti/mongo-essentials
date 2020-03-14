const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = '<mongodb url>';

// Database Name
const dbName = 'test';

// Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true } );

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
db.collection('products').findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
  })  

db.collection("products").find({"name":"pen"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  db.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
})