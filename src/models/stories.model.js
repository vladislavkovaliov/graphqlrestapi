const { schemaGenerator } = require('../utils/schema-generator.util');
const { modelGenerator } = require('../utils/model-generator.util');
const R = require('ramda');

const Stories = R.compose(
  R.curry(modelGenerator)('stories'),
  schemaGenerator,
);

module.exports.Stories = Stories({
  id: String,
  index: Number,
  guid: String,
  picture: String,
  date: String,
  text: String,
  likes: [],
  comments: [],
  following: [],
  followers: [],
});
