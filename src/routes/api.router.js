const router = require('express').Router();
const passport = require('passport');
const protect = require('../middlewares/auth.middleware');
const config = require('../middlewares/config.middleware');
const APIController = require('../controllers/api.controller');
const apiController = APIController();

router
  .route('/pingPong')
  .get(apiController.getPingPong);

router
  .route('/config')
  .get(config);

router
  .route('/authPingPong')
  .get(protect, apiController.getPingPong);

module.exports = router;
