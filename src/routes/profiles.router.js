const router = require('express').Router();
const ProfilesController = require('../controllers/profiles.controller');

const profilesController = ProfilesController();

router
  .route('/profiles')
  .post(profilesController.getProfileData);

module.exports = router;
