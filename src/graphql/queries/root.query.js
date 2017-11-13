const graphql = require('graphql');
const users = require('../../data/users');
const { UserType } = require('../types');
const { find } = require('lodash');

const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve(parentValue, args) {
        return find(users, ['id', args.id]);
      }
    },
    users: {
      type: new graphql.GraphQLList(UserType),
      resolve(parentValue, args) {
        return users;
      }
    }
  }
});

module.exports = RootQuery;
