const router = require('express').Router();
const StoriesController = require('../controllers/stories.controller');

const storiesController = StoriesController();

router
  .route('/stories/following')
  .post(storiesController.following);

router
  .route('/stories/followers')
  .post(storiesController.followers);

module.exports = router;
