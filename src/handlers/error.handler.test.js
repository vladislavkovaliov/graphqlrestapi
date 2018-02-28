const errorHandler = require('./error.handler');

const resStatus = jest.fn(() => {});
const resJson = jest.fn(() => {});

const res = {
  status: resStatus,
  json: resJson,
};

resStatus.mockImplementation(() => res);
resJson.mockImplementation(() => res);

const req = jest.fn(() => {});
const next = jest.fn(() => {});

describe('[error.handler.js]', () => {
  describe('errorHandler()', () => {
    test('should call status with 401', () => {
      const err = {
        statusCode: 401,
      };

      errorHandler(err, req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalled();
    });

    test('should call status with 403', () => {
      const err = {
        statusCode: 403,
      };

      errorHandler(err, req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalled();
    })

    test('should call status with 500', () => {
      const err = {
        statusCode: 500,
      };

      errorHandler(err, req, res, next);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalled();
    });
  });
});