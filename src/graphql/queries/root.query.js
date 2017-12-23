const graphql = require('graphql');
const profiles = require('../../data/profiles.json');
const { UserType, ProfileType } = require('../types');
const { find } = require('lodash');
const { Users } = require('../../models/users.model');
const { Profiles } = require('../../models/profiles.model');

const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        index: { type: graphql.GraphQLInt }
      },
      async resolve(parentValue, args) {
        try {
          const users = await Users.find();

          return find(users, ['index', args.index]);          
        }
        catch(err) {
          console.log(err);
        }
      }
    },
    profile: {
      type: ProfileType,
      args: {
        index: { type: graphql.GraphQLInt }
      },
      async resolve(parentValue, args) {
        try {
          const profiles = await Profiles.find();

          return find(profiles, ['index', args.index]);          
        }
        catch(err) {
          console.log(err);
        }
      }
    },
    profiles: {
      type: new graphql.GraphQLList(ProfileType),
      async resolve(parentValue, args) {
        const profiles = await Profiles.find();

        return profiles; 
      }
    },
    users: {
      type: new graphql.GraphQLList(UserType),
      async resolve(parentValue, args) {
        const users = await Users.find();

        return users; 
      }
    }
  }
});

module.exports = RootQuery;
