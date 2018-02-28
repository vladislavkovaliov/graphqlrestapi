const { Stories } = require('../models/stories.model');

module.exports = (overrides) => {
  const base = {
    following: async (req, res) => {
      const { id: _id, profileId } = req.body;

      await Stories
        .findOneAndUpdate(
          { _id },
          {
            $addToSet: {
              following: profileId,
            },
          },
        );

      res.status(200).json({
        following: "OK"
      });
    },
    followers: async (req, res) => {
      const { id: _id, profileId } = req.body;

      await Stories
        .findOneAndUpdate(
          { _id },
          {
            $addToSet: {
              followers: profileId,
            },
          },
        );

      res.status(200).json({
        followers: "OK"
      });
    },
  };

  return { ...base, ...overrides};
};

