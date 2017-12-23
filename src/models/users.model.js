const { schemaGenerator } = require('../utils/schema-generator.util');
const { modelGenerator } = require('../utils/model-generator.util');
const R = require('ramda');

const Users = R.compose(
  R.curry(modelGenerator)('users'),
  schemaGenerator,
); 

module.exports.Users = Users({
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
