const graphql = require('graphql');

module.exports = StoryInputType = new graphql.GraphQLInputObjectType({
  name: 'StoryInput',
  description: 'Story payload definition',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    index: { type: graphql.GraphQLInt },
    guid: { type: graphql.GraphQLString },
    picture: { type: graphql.GraphQLString },
    date: { type: graphql.GraphQLString },
    text: { type: graphql.GraphQLString },
    likes: { type: new graphql.GraphQLList(graphql.GraphQLString) },
    comments: { type: new graphql.GraphQLList(graphql.GraphQLString) },
  })
});
