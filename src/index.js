const express = require('express');
const app = express();
const errorHandler = require('./handlers/error.handler');
const passport = require('passport');
const {
  setupMiddlewares,
  setupLogger,
  setupGraphiql,
  setupPassport,
  setupCors } = require('./middlewares');
const rest = require('./routes/rest.router');
// const PORT = 3000;

app.set('port', (process.env.PORT || 3000))

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
 * Setup routing
 */
app.use(rest);
app.use('*', (req, res) => res.status(404).json({ message: 'Route does\'t exist.' }));

app.use(errorHandler);

/**
 * Start server
 */
app.listen(app.get('port'), () => {
  console.log('Server started on port', app.get('port'));
});

module.exports = app;
