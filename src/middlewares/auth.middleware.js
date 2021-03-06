const passport = require('passport');
const { UNAUTHOTIZED } = require('../errors/errors');

function passportAuth(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, data) => {
    if (data) {
      next(null, req, res);
    } else {
      next(UNAUTHOTIZED);
    }
  })(req, res, next);
}

module.exports = [passportAuth]
