const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(bodyParser.json());
//app.use(express.json()); Make sure it comes back as json

mongoose.connect('mongodb+srv://UserName:<password>@cluster0-8vkls.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running at 3000..') });
