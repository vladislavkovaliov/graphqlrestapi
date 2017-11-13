const APIController = require('../api.controller');
const passport = require('passport');

module.exports = function (overrides) {
  const apiController = APIController();
  const base = {
    // getPingPong: (req, res, next) => {
    //   // passport.authenticate('jwt', { session: false }, (err, data) => {
    //   //   console.log(err);
    //   //   console.log(data);
    //   //
    //   //   apiController.getPingPong(req, res);
    //   // })(req, res, next);
    //   //
    //   apiController.getPingPong(req, res);
    // },
    getPingPong: (req, res, next) => {
      passport.authenticate('jwt', { session: false }, (err, data) => {
        if (data) {
          apiController.getPingPong(req, res);
        } else {
          next({
            statusCode: 403,
            success: false,
            msg: 'Unauthorized.'
          });
        }
      })(req, res, next);
    }
  };

  return { ...base, ...overrides};
}
