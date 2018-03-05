const router = require('express').Router();
const StoriesController = require('../controllers/stories.controller');

const storiesController = StoriesController();

router
  .route('/stories')
  .get(storiesController.getStories);

module.exports = router;
