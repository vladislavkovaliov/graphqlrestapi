const graphql = require('graphql');
const profiles = require('../../data/profiles.json');
const { UserType, ProfileType, UserInputType, ProfileInputType } = require('../types');
const { find } = require('lodash');
const { Users } = require('../../models/users.model');
const { Profiles } = require('../../models/profiles.model');


const RootMutation = new graphql.GraphQLObjectType({
  name: 'Mutations',
  description: 'Update users',
  fields: {
    updateUser: {
      type: UserType,
      args: {
        input: {
          type: new graphql.GraphQLNonNull(UserInputType),
        },
      },
      resolve: async (rootValue, { input }) => {
        const query = {
          id: input.id
        };
        const options = {
          new: true
        };

        return await Users.findOneAndUpdate(query, input, options);
      },
    },
    updateProfile: {
      type: ProfileType,
      args: {
        input: {
          type: new graphql.GraphQLNonNull(UserInputType),
        },
      },
      resolve: async (rootValue, { input }) => {
        const query = {
          id: input.id
        };
        const options = {
          new: true
        };

        return await Profiles.findOneAndUpdate(query, input, options);
      },
    },
  },
});

module.exports = RootMutation;
