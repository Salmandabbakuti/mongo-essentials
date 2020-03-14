const MongoClient = require('mongodb').MongoClient;
const uri = "<mongo db url>";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    try{
  const collection = client.db("test").collection("CRUD");
  // perform actions on the collection object
  console.log("connected to db Successfully..")
  collection.find()
  client.close();
    }catch(err){
        console.error(err)
    }
});