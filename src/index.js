const express = require('express');
const app = express();
const errorHandler = require('./handlers/error.handler');
const passport = require('passport');
const {
  setupMiddlewares,
  setupLogger,
  setupGraphiql,
  setupPassport,
  setupCors,
  setupSwaggerLocal,
  setupSwaggerHeroku,
  setupMongoose } = require('./middlewares');
const rest = require('./routes/rest.router');
const argv = require('minimist')(process.argv.slice(2));
const config = require('./config/config');

app.set('port', (process.env.PORT || 3000))

/**
 * Set env. (it may be qa/dev)
 * QA - heroku
 * LOCAL - local
 */
app.set('env', argv.env);

/**
 * Setup logger
 */
setupLogger(app);

/**
 * Setup middlewares
 */
setupMiddlewares(app);

/**
 * Setup graphql
 */
setupGraphiql(app);

/**
 * Setup passport
 */
setupPassport(app, passport);

/**
 * Setup cors
 */
setupCors(app);

/**
 * Setup swagger
 */
switch (argv.env) {
  case(config.env.local): {
    setupSwaggerLocal(app);
    break;
  }
  case(config.env.heroku): {
    setupSwaggerHeroku(app);
    break;
  }
  default:
    break;
}

/**
 * Setup mongoose
 */
setupMongoose(app, config);

/**
 * Setup routing
 */
app.use(rest);
app.use('/swagger', express.static('swagger'));

app.use('/', (req, res) => {
  res.json({
    GraphIQL: {
      url: "https://graphqlrestapi.herokuapp.com/graphql"
    },
    urls: {
      auth: "https://graphqlrestapi.herokuapp.com/auth",
      body: {
        keys: ['login', 'password'],
        description: `
          You can get login/password from graphiql.
        `
      },
      public: {
        urls: [
          "https://graphqlrestapi.herokuapp.com/api/pingPong"
        ]
      },
      private: {
        urls: [
          "https://graphqlrestapi.herokuapp.com/api/authPingPong",
        ],
        headers: {
          authorization: 'JWT ...'
        }
      }
    },
    contacts: {
      email: 'v.v.kovaliov@gmail.com',
      skype: 'v.v.kovaliov',
      github: 'github.com/vladislavkovaliov'
    }
  });
});
app.use('*', (req, res) => res.status(404).json({ message: 'Route does\'t exist.' }));

app.use(errorHandler);

/**
 * Start server
 */
app.listen(app.get('port'), () => {
  console.log('Server started on port', app.get('port'));
});

module.exports = app;
