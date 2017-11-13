const router = require('express').Router();
const passport = require('passport');

const APIController = require('../controllers/api.controller');
const APIProxyController = require('../controllers/proxies/api.controller.proxy');

const apiController = APIController();
const apiProxyController = APIProxyController();

const _ = require('lodash-fp');
const temp = _.map();
router
  .route('/pingPong')
  .get(apiController.getPingPong);

router
  .route('/authPingPong')
  .get(apiProxyController.getPingPong);

module.exports = router;
