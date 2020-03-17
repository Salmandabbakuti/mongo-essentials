#### Schema Document Types&Validators

##### String
lowercase: boolean, whether to always call .toLowerCase() on the value
uppercase: boolean, whether to always call .toUpperCase() on the value
trim: boolean, whether to always call .trim() on the value
match: RegExp, creates a validator that checks if the value matches the given regular expression
enum: Array, creates a validator that checks if the value is in the given array.
minlength: Number, creates a validator that checks if the value length is not less than the given number
maxlength: Number, creates a validator that checks if the value length is not greater than the given number
##### Number
min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.

#### Example
```
var schema = new Schema({
  name: {type: String,required: true},
  phone:{type:Number, min:[6, "minimum be 6 numbers"],max:[12,"maximum 12 numbers],required:[true,"phone number required},
  
  
});
