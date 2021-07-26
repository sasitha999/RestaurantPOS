const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

  items: { type: Array, required: true },
  subTotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  discount: { type: Number, required: true },
  total: { type: Number, required: true },
  
});

module.exports = mongoose.model('order', orderSchema);
