const assert = require("assert")
const request = require("supertest");
const bluebird = require("bluebird");
const mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
const app = require("../app")
const Item = require("../models/item");
const Purchase = require("../models/purchase");

describe('GET /api/customer/items', function () {
    it("should get a list of items from the items db", function (done) {
        Item.find({}, function (err, items) {
            if (err) {
                done(err)
            } else {
                assert(items);
                done();
            }
        });
    });
})

describe('PUT /api/customer/items/:itemId/purchases', function () {
    it("should locate the item by the id", function (done) {
        Item.findById({id}, function (err, items) {
            if (err) {
                done(err)
            } else {
                assert(id);
                done();
            }
        });
    });
})
