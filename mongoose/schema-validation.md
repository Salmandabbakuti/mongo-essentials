#### Validators example

```
var schema = new Schema({
  name: {type: String,required: true},
  phone:{type:Number, min:[6, "minimum be 6 numbers"],max:[12,"maximum 12 numbers],required:[true,"phone number required},
  
  
});
