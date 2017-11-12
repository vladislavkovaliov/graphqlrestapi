const graphql = require('graphql');

module.exports = UserType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
    createdDate: { type: graphql.GraphQLString }
  })
});
