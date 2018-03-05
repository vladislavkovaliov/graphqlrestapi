const router = require('express').Router();
const ProfilesController = require('../controllers/profiles.controller');

const profilesController = ProfilesController();

router
  .route('/profiles')
  .get(profilesController.getProfiles);

router
  .route('/profiles')
  .post(profilesController.getProfileData);

router
  .route('/profiles/following')
  .post(profilesController.following);

router
  .route('/profiles/followers')
  .post(profilesController.followers);

module.exports = router;
