const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const Item = require("./models/item");

module.exports = router;

// get a list of items
router.get('/api/customer/items', function (req, res) {
  Item.find({}).then(function (items) {
    res.json({items});
  })
});

// purchase an item
router.post('/api/customer/items/:itemId/purchases', function (req, res) {
  let id = req.params.itemId;
  console.log(id);
  Item.findByIdAndRemove(id, function(err, doc){
    console.log(err);
    if (err) { return sendError(res,err) }
  })
});


// get a list of all purchases with their item and date/time
router.get('/api/vendor/purchases', function (req, res) {

});

// get a total amount of money accepted by the machine
router.get('/api/vendor/money', function (req, res) {

});

// add a new item not previously existing in the machine
router.post('/api/vendor/items', function (req, res) {

});

// update item quantity, description, and cost
router.put('/api/vendor/items/:itemId', function (req, res) {

})
