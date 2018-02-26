const graphql = require('graphql');
const profiles = require('../../data/profiles.json');
const { UserType, ProfileType, StoryType } = require('../types');
const { find } = require('lodash');
const { Users } = require('../../models/users.model');
const { Profiles } = require('../../models/profiles.model');
const { Stories } = require('../../models/stories.model');


const RootQuery = new graphql.GraphQLObjectType({
  name: 'Query',
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
    },
    story: {
      type: StoryType,
      args: {
        index: { type: graphql.GraphQLInt }
      },
      async resolve(parentValue, args) {
        try {
          const stories = await Stories.find();
          console.log(stories);
          console.log(42);
          return find(stories, ['index', args.index]);
        }
        catch(err) {
          console.log(err);
        }
      }
    },
    stories: {
      type: new graphql.GraphQLList(StoryType),
      async resolve(parentValue, args) {
        const stories = await Stories.find();

        return stories;
      }
    },
  }
});

module.exports = RootQuery;
