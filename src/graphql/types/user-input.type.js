const graphql = require('graphql');

module.exports = UserInputType = new graphql.GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User payload definition',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    login: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    password: { type: graphql.GraphQLString },
    created: { type: graphql.GraphQLString },
    gender: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    hireDate: { type: graphql.GraphQLString },
    dateOfBirth: { type: graphql.GraphQLString },
    guid: { type: graphql.GraphQLString },
    picture: { type: graphql.GraphQLString },
    homeAddress: { type: graphql.GraphQLString },
    department: { type: graphql.GraphQLString },
    phones: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  })
});
