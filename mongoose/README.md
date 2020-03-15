1. Database: A storage that contain more than one collections
2. Collection: contains one or more documents
3. Document: Key value pairs or nested objects and arrays 
4. Schema: data structure of document
5. Model: A constructor that takes specific schema and create documents. responsible for creating and reading documents.

##### Relationship
```
var productSchema = new Schema({
  name: String,qty:Number
});
// structure of document
var Product = mongoose.model('products',productSchema );
//modelling schema
const product = new Product({ name: 'Camera', qty: 20 });
//storing data on to db using model
```
##### Database Interface methods:

1. save(): creates documents based on schema model
2. find(): reads matching documents based on query
3. findById(): finds document by Id
4. findOne(): finds first matching document based on query.

*** Rest of the methods ```updateOne(), updateMany(),deleteOne(),deleteMany()``` are same as described in ```mongoClient``` Directory ```README.md```

