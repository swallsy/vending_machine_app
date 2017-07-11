const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Item = require("./models/item")
mongoose.connect('mongodb://localhost:27017/inventorydb');
const routes = require('./routes.js');

app.use(routes);


if (require.main === "module") {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
}

module.exports = app;
