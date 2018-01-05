const { RootQuery } = require('./queries');
const { RootMutation } = require('./mutations');
const ExpressGraphQL = require('express-graphql');
const graphql = require('graphql');

const schema = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

const expressGraphQL = ExpressGraphQL({
  schema: schema,
  graphiql: true,
});

module.exports = {
  expressGraphQL,
};
