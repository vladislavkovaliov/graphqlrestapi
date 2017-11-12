const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const ExpressGraphQL = require('express-graphql');
const graphql = require('graphql');
const UserType = require('./types/user.type');
const { find } = require('lodash');
const users = require('./data/users');

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

const schema = new graphql.GraphQLSchema({
  query: RootQuery
});

const expressGraphQL = ExpressGraphQL({
  schema: schema,
  graphiql: true,
});

module.exports = {
  setupMiddlewares: (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  },
  setupLogger: (app) => {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.use(expressWinston.logger({
      transports: [
      new winston.transports.Console({
        json: true,
          colorize: true
        })
      ],
    }));
  },
  setupGraphiql: (app) => {
    app.use('/graphql', expressGraphQL);
  },
  // only for testing
  RootQuery,
  schema,
  expressGraphQL,
};
