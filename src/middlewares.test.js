const { setupMiddlewares, setupLogger, setupGraphiql, expressGraphQL } = require('./middlewares');
const bodyParser = require('body-parser');

jest.mock('body-parser', () => ({
  json: jest.fn(),
  urlencoded: jest.fn(),
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
});
