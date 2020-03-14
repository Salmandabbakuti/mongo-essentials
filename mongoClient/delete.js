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
   db.collection('products').deleteOne({name:"sharpner"}, function(err, r) {
      assert.equal(null, err);
      assert.equal(1, r.deletedCount);
   })

    db.collection('products').deleteMany({name:"pen"}, function(err, r) {
        assert.equal(null, err);
        assert.equal(2, r.deletedCount);
        client.close();
    })
})
