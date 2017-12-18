const graphql = require('graphql');
const users = require('../../data/users.json');
const profiles = require('../../data/profiles.json');
const { UserType, ProfileType } = require('../types');
const { find } = require('lodash');

const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        index: { type: graphql.GraphQLInt }
      },
      resolve(parentValue, args) {
        return find(users, ['index', args.index]);
      }
    },
    profile: {
      type: ProfileType,
      args: {
        index: { type: graphql.GraphQLInt }
      },
      resolve(parentValue, args) {
        return find(profiles, ['index', args.index]);
      }
    },
    profiles: {
      type: new graphql.GraphQLList(ProfileType),
      resolve(parentValue, args) {
        return profiles;
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
