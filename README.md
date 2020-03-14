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
5. updateOne():
6. updateMany()
7. deleteOne()
8. deleteMany()

