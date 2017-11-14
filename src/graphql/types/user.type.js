const graphql = require('graphql');

module.exports = UserType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    index: { type: graphql.GraphQLInt },
    email: { type: graphql.GraphQLString },
    login: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
    created: { type: graphql.GraphQLString },
    gender: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    hireDate: { type: graphql.GraphQLString },
    dateOfBirth: { type: graphql.GraphQLString },
    guid: { type: graphql.GraphQLString },
    picture: { type: graphql.GraphQLString },
    homeAddress: { type: graphql.GraphQLString },
    phones: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  })
});
