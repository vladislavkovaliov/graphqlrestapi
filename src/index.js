const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.router');
const winston = require('winston');
const expressWinston = require('express-winston');
const errorHandler = require('./handlers/error.handler');
const morgan = require('morgan');

const PORT = 3000;

/**
 * Setup logger
 */
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(expressWinston.logger({
  transports: [
  new winston.transports.Console({
    json: true,
      colorize: true
    })
  ],
}));

/**
 * Setup middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Setup routing
 */

app.use('/api', apiRouter);
app.use('*', (req, res) => res.status(404).json({ message: 'Route does\'t exist.' }));

app.use(errorHandler);

/**
 * Start server
 */
app.listen(PORT, (port) => {
  console.log('Server started on port', PORT);
});
