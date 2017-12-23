const mongoose = require('mongoose');

module.exports.modelGenerator = (name, schema) => mongoose.model(name, schema);
