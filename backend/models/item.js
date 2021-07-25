const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  amount: { type: String, required: true },
  price: { type: Number, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'category' }],
});

module.exports = mongoose.model('item', itemSchema);

