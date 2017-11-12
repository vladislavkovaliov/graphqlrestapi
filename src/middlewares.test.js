const { setupMiddlewares, setupLogger, setupGraphiql } = require('./middlewares');
const bodyParser = require('body-parser');

jest.mock('body-parser', () => ({
  json: jest.fn(),
  urlencoded: jest.fn(),
}));
// jest.mock('morgan', );
// jest.mock('winston', );
// jest.mock('express-winston', );
// jest.mock('express-graphql', );
// jest.mock('graphql', );

const app = {
  use: jest.fn(),
};

describe('[middlewares.js]', () => {
  describe('setupMiddlewares()', () => {
    test('should pass into use method a body-parser json()', () => {
      setupMiddlewares(app);

      expect(bodyParser.json).toHaveBeenCalled();
    });

    test('should pass into use method a body-parser urlencoded({ extended: false })', () => {
      setupMiddlewares(app);

      expect(bodyParser.urlencoded).toHaveBeenCalledWith({ extended: false });
    });
  });
});
