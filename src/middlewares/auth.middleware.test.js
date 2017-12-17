const auth = require('./auth.middleware');

const passport = require('passport');
const { UNAUTHOTIZED } = require('../errors/errors');

jest.mock('passport', () => ({
  authenticate: jest.fn(() => jest.fn()),
}));

describe('[auth.middleware.js]', () => {
  describe('inject', () => {
    test('should be array', () => {
      expect(auth).toBeDefined();
      expect(auth).toBeInstanceOf(Array);
    });
  });

  describe('passportAuth()', () => {
    test('should be called passportAuth with jwt strategy and session', () => {
      const passportAuth = auth[0];
      passportAuth(null, null, null);

      expect(passport.authenticate.mock.calls[0].length).toBe(3);
      expect(passport.authenticate.mock.calls[0][0]).toEqual('jwt');
      expect(passport.authenticate.mock.calls[0][1]).toHaveProperty('session');
      
      expect(passport.authenticate).toHaveBeenCalled();
    });
  });
});