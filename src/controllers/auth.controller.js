const jwt = require('jsonwebtoken');
const users = require('../data/users');
const { find } = require('lodash');
const { AUTHENTICATION_ERROR } = require('../errors/errors');

module.exports = function (overrides) {
  const base = {
    jwt: (req, res, next) => {
      const { email } = req.body;
      const user = find(users, ['email', email]);

      if (user) {
        const { password } = req.body;

        if (password && user.password === password) {
          const token = jwt.sign(user, 'secret');

          res.status(200).json({
            statusCode: 200,
            code: 200,
            success: true,
            data: {
              email: user.email,
              login: user.login,
              password: user.password,
              profileId: user.guid,
            },
            token: `JWT ${token}`,
          });
        } else {
          next(AUTHENTICATION_ERROR);
        }
      } else {
        next(AUTHENTICATION_ERROR)
      }
    }
  };

  return { ...base, ...overrides};
}
