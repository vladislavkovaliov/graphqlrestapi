const jwt = require('jsonwebtoken');
const users = require('../data/users');
const { find } = require('lodash');

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
              user: {
                email: user.email,
              },
            },
            token: `JWT ${token}`,
          });
        } else {
          next({
            success: false,
            msg: 'Authentication failed. Wrong password.',
            statusCode: 401,
          });
        }
      } else {
        next({
          success: false,
          msg: 'Authentication failed. User not found.',
          statusCode: 401,
        })
      }
    }
  };

  return { ...base, ...overrides};
}
