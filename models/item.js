const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const ItemSchema = new mongoose.Schema ({
  description: { type: String, default: "item"},
  cost: { type: Number },
  quantity: { type: Number }
})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
