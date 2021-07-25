const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = new Schema({
  name: { type: String, required: true },
  values: { type: String, required: true, },
});


module.exports = mongoose.model('config', configSchema);
