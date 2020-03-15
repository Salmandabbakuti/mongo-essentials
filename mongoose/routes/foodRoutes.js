const express = require('express');
const foodModel = require('../models/food');
const app = express();

app.get('/get', async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/create', async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/delete', async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.body.id)

    if (!food) res.status(404).send("No item found")
    res.status(200).send("Deleted food Data Successfully..)
  } catch (err) {
    res.status(500).send(err)
  }
})
app.post('/update/', async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.body.id, req.body)
    await foodModel.save()
    res.send("Updated food Data Successfully..)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
