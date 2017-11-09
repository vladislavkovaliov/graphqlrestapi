const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');

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
  }
};