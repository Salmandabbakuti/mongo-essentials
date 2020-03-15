const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(bodyParser.json());
//app.use(express.json()); Make sure it comes back as json

mongoose.connect('<mongodb url>', { useUnifiedTopology: true, useNewUrlParser: true },);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running at 3000..') });
