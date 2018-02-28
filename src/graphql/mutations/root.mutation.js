const graphql = require('graphql');
const profiles = require('../../data/profiles.json');
const { UserType, StoryType, ProfileType, UserInputType, ProfileInputType, StoryInputType } = require('../types');
const { find } = require('lodash');
const { Users } = require('../../models/users.model');
const { Profiles } = require('../../models/profiles.model');
const { Stories } = require('../../models/stories.model');
const { deleteProps } = require('../../utils/delete-props.util');

const RootMutation = new graphql.GraphQLObjectType({
  name: 'Mutations',
  description: 'Updates',
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
    updateStory: {
      type: StoryType,
      args: {
        input: {
          type: new graphql.GraphQLNonNull(StoryInputType),
        },
      },
      resolve: async (rootValue, { input }) => {
        const query = {
          _id: input.id
        };
        const options = {
          new: true
        };

        const { comments, likes } = input;
        deleteProps(input, ['comments', 'likes']);

        return await Stories.findOneAndUpdate(
          query,
          Object.assign(input, {
            $addToSet: {
              comments: {
                $each: comments || []
              },
              likes: {
                $each: likes || []
              },
            },
          }),
          options
        );
      },
    },
    insertStory: {
      type: StoryType,
      args: {
        id: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        picture: {
          type: graphql.GraphQLString,
        },
        text: {
          type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        date: {
          type: graphql.GraphQLString,
        },
        likes: {
          type: new graphql.GraphQLList(graphql.GraphQLString),
        },
        comments: {
          type: new graphql.GraphQLList(graphql.GraphQLString),
        }
      },
      resolve: async (rootValue, input) => {
        const query = {
          id: input.id
        };
        const options = {
          new: true,
          upsert: true,
        };

        const { comments, likes } = input;
        deleteProps(input, ['comments', 'likes']);

        return await Stories.findOneAndUpdate(
          query,
          Object.assign(input, {
            $addToSet: {
              comments: {
                $each: comments || []
              },
              likes: {
                $each: likes || []
              },
            },
          }),
          options);
      },
    },
  },
});

module.exports = RootMutation;
