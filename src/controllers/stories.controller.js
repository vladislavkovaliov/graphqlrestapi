const { Stories } = require('../models/stories.model');

module.exports = (overrides) => {
  const base = {
    getStories: async (req, res) => {
      const stories = await Stories.find({});

      return res.status(200).json(stories);
    },
  };

  return { ...base, ...overrides};
};

