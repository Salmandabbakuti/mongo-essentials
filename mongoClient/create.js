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

  // Insert a single document using insertOne()
  db.collection('products').insertOne({"name":"pen","qty":"25"}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
  })
     // Insert a single document using insert()
  db.collection('products').insert({"name":"book","qty":"45"}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);
  })
    // Insert multiple documents using insert()
    db.collection('products').insert([{"name":"pencil","qty":44},{"name":"pen","qty":25}], function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.insertedCount);
    })
// Insert multiple documents using insert()
    db.collection('products').insertMany([{"name":"sharpner","qty":50},{"name":"eraser","qty":30}], function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.insertedCount);

      client.close();
    });
});