const { schemaGenerator } = require('../utils/schema-generator.util');
const { modelGenerator } = require('../utils/model-generator.util');
const R = require('ramda');

const Profiles = R.compose(
  R.curry(modelGenerator)('profiles'),
  schemaGenerator,
); 

module.exports.Profiles = Profiles({
  id: String,
  index: Number,
  guid: String,
  picture: String,
  age: Number,
  name: String,
  login: String,
  password: String,
  gender: String,
  email: String,
  phones: [[]],
  homeAddress: String,
  created: String,
  hireDate: String,
  dateOfBirth: String,
  department: String,
});
