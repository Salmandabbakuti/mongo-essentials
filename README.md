# mongo-crud
crud operations using mongo node and express

1. insertOne() : Inserts a single document into a collection.
```
db.products.insertOne( { item: "card", qty: 15 } ); 
# products is the collection name in db
```
2. insertMany() : Inserts multipe document into a collection.

```
db.products.insertMany( [
      { item: "card", qty: 15 },
      { item: "envelope", qty: 20 },
      { item: "stamps" , qty: 30 }
   ] );
} 
```
3. insert(): Inserts a single as well as multiple documents into a collection.
```
db.products.insert( { _id: 10, item: "box", qty: 20 } )

db.products.insert(
   [
     { _id: 11, item: "pencil", qty: 50, type: "no.2" },
     { item: "pen", qty: 20 },
     { item: "eraser", qty: 25 }
   ]
)
```

4. find() :The find() method with no parameters returns all documents from a collection and returns all fields for the documents.
```
db.products.find() //returns all documents in products collection
db.products.find({"item":"pen"}) //returns all "item" named "pen"
```
5. findOne(): returns first matching document of query params
```
db.products.findOne({"item":"card","qty":"15"}) // returns first card item with a qty of 15
```
6. updateOne(): Modifies an existing document or documents in a collection. The method can modify specific fields of an existing document or documents or replace an existing document entirely, depending on the update parameter.
```
db.products.update(query, update, options) // SYNTAX

db.products.update(
   { qty: { $lte: 10 } }, 
   { $set: { reorder: true } },
   { multi: true } 
)

//finds document quantity(qty) is lessthan or equal($lte) to 10
 // updates reorder element with true if reorder field is not found, it will add field with a value specified
 //updates multiple documents

```
7. updateMany(): updates multiple documents with matching query
```
db.products.updateMany(
      { qty: { $gt: 4 } }, 
      { $set: { "Review" : true } }
   );
   
 //$gt: greater than
```
8. updateOne(): finds the first document that matches the filter and applies the specified update modifications.\
```
db.products.update(
   { qty: { $lte: 10 } }, 
   { $set: { reorder: true } })
```
9. deleteOne(): delete first matching document of query filter

```
db.products.deleteOne( { "_id" : ObjectId("563237a41a4d68582c2509da") } );
```

10. deleteMany(): deletes all the documents matching query

```
db.products.deleteMany( { "item" : "pen", "qty" : { $lte :1 } } );

// delete all the pens where qty is less than or equal to 1

```
11.explain() : returns query panner info all methods

```
db.products.explain().find({"item":"pen","qty":"4"})
```


