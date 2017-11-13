const { RootQuery } = require('./queries');
const ExpressGraphQL = require('express-graphql');
const graphql = require('graphql');

const schema = new graphql.GraphQLSchema({
  query: RootQuery
});

const expressGraphQL = ExpressGraphQL({
  schema: schema,
  graphiql: true,
});

module.exports = {
  expressGraphQL,
};
