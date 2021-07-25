const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  anme: { type: String, required: true },
 
});

module.exports = mongoose.model('category', categorySchema);
