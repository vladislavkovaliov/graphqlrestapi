const APIController = require('../api.controller');
const passport = require('passport');
const { UNAUTHOTIZED } = require('../../errors/errors');

module.exports = function (overrides) {
  const apiController = APIController();
  const base = {
    getPingPong: (req, res, next) => {
      passport.authenticate('jwt', { session: false }, (err, data) => {
        if (data) {
          apiController.getPingPong(req, res);
        } else {
          next(UNAUTHOTIZED);
        }
      })(req, res, next);
    }
  };

  return { ...base, ...overrides};
}
