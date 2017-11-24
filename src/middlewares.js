const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const { expressGraphQL } = require('./graphql/init');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const users = require('./data/users');
const { find } = require('lodash');
const cors = require('cors');
const fs = require('fs');

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
      app.use('/graphql/profiles', expressGraphQL);
      app.use('/graphql/users', expressGraphQL);
    },
    setupPassport: (app, passport) => {
      const passportOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: 'secret',
      };

      passport.use('jwt', new JwtStrategy(passportOptions, (jwt_payload, done) => {
        const user = find(users, ['id', jwt_payload.id]);

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      }));

      app.use(passport.initialize());
    },
    setupCors: (app) => {
      app.use(cors());
    },
    setupSwaggerDev: (app) => {
      const swaggerSource = './swagger/index.template.html';
      const swaggerTarget = './swagger/index.html';

      const data = fs.readFileSync(swaggerSource, 'utf8');
      const newData = data.replace('%SOURCE%', `"http://localhost:${app.get('port')}/swagger/swagger.json"`);

      fs.writeFileSync(swaggerTarget, newData);
    },
    setupSwaggerQA: (app) => {
      const swaggerSource = './swagger/index.template.html';
      const swaggerTarget = './swagger/index.html';

      const data = fs.readFileSync(swaggerSource, 'utf8');
      const newData = data.replace('%SOURCE%', '"https://graphqlrestapi.herokuapp.com/swagger/swagger.json"');

      fs.writeFileSync(swaggerTarget, newData);
    }
  };
