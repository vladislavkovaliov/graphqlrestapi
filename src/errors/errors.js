module.exports = {
  AUTHENTICATION_ERROR: {
    success: false,
    msg: 'Authentication failed. Wrong password.',
    statusCode: 401,
  },
  UNAUTHOTIZED: {
    statusCode: 403,
    success: false,
    msg: 'Unauthorized.'
  },
};