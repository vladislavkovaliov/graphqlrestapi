const router = require('express').Router();
const ProfileController = require('../controllers/profile.controller');

const profileController = ProfileController();

router
  .route('/profile')
  .post(profileController.getProfileData);

module.exports = router;
