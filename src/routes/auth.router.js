const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');

const authController = AuthController();

router
  .route('/')
  .post(authController.jwt);

module.exports = router;
