const { setupMiddlewares, setupLogger, setupGraphiql, setupPassport, setupCors, setupSwaggerDev, setupSwaggerQA } = require('./middlewares');
const { expressGraphQL } = require('./graphql/init');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

jest.mock('body-parser', () => ({
  json: jest.fn(),
  urlencoded: jest.fn(),
}));
jest.mock('passport-jwt', () => ({
  Strategy: jest.fn(),
  ExtractJwt: {
    fromAuthHeaderWithScheme: jest.fn(),
  },
}));
jest.mock('passport', () => ({
  use: jest.fn(),
  initialize: jest.fn(),
}));
jest.mock('cors', () => jest.fn());
jest.mock('fs', () => ({
  readFileSync: jest.fn(() => 'some string'),
  writeFileSync: jest.fn(),
}));

// jest.mock('morgan', );
// jest.mock('winston', );
// jest.mock('express-winston', );
// jest.mock('graphql', );

const app = {
  use: jest.fn(),
};

describe('[middlewares.js]', () => {
  describe('setupMiddlewares()', () => {
    test('should pass into use() a body-parser json()', () => {
      setupMiddlewares(app);

      expect(bodyParser.json).toHaveBeenCalled();
    });

    test('should pass into use() a body-parser urlencoded({ extended: false })', () => {
      setupMiddlewares(app);

      expect(bodyParser.urlencoded).toHaveBeenCalledWith({ extended: false });
    });
  });

  describe('setupGraphiql()', () => {
    test('should pass into use() url and express-graphql object', () => {
      setupGraphiql(app);

      expect(app.use).toHaveBeenCalledWith('/graphql', expressGraphQL);
    });
  });

  describe('setupPassport()', () => {
    test('should setup passport and initialize', () => {
      setupPassport(app, passport);

      expect(passport.use).toHaveBeenCalled();
      expect(passport.initialize).toHaveBeenCalled();
      expect(app.use).toHaveBeenCalled();
    });
  });

  describe('setupCors()', () => {
    test('should setup cors', () => {
      setupCors(app);

      expect(cors).toHaveBeenCalled();
      expect(app.use).toHaveBeenCalled();
    });
  });

  describe('setupSwaggerDev()', () => {
    test('should setup swagger for dev', () => {
      app.get = jest.fn(() => 3000);

      setupSwaggerDev(app);

      expect(fs.readFileSync).toHaveBeenCalled();
      expect(fs.writeFileSync).toHaveBeenCalled();
    });

    test('should setup swagger for qa', () => {
      app.get = jest.fn(() => 3000);

      setupSwaggerQA(app);

      expect(fs.readFileSync).toHaveBeenCalled();
      expect(fs.writeFileSync).toHaveBeenCalled();
    });
  });
});
