const express = require('express');
const app = express();
const errorHandler = require('./handlers/error.handler');
const passport = require('passport');
const {
  setupMiddlewares,
  setupLogger,
  setupGraphiql,
  setupPassport } = require('./middlewares');
const rest = require('./routes/rest.router');
const PORT = 3000;

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
 * Setup routing
 */
app.use(rest);
app.use('*', (req, res) => res.status(404).json({ message: 'Route does\'t exist.' }));

app.use(errorHandler);

/**
 * Start server
 */
app.listen(PORT, (port) => {
  console.log('Server started on port', PORT);
});
