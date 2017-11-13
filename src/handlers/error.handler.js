module.exports = (err, req, res, next) => {
  switch (err.statusCode) {
    case 401:
      res.status(401).json(err);
      break;
    case 403:
      res.status(403).json(err);
      break;
    default:
      res.status(500).json({
        statusCode: 500,
        msg: 'Server error...',
        err: err
      });
      break;
  }
};
