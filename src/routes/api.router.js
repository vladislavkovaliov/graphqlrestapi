const router = require('express').Router();
const APIController = require('../controllers/api.controller');

const apiController = APIController();

router
  .route('/pingPong')
  .get(apiController.getPingPong);

module.exports = router;
