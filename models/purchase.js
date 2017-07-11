const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// const Purchase = require('./app.js');
const purchaseSchema = new mongoose.Schema(
        {
          "status": {type:Boolean},
            "itemspurchased": {
                "item":{type:String},
                "quantity":{type:Number}
            },
            "time": {type: Date},
          "data": {
            "money_given": {type:Number},
            "money_required": {type:Number}
          }
        })
const Purchase = mongoose.model('Purchase',purchaseSchema);
module.exports = Purchase;
