const { Profiles } = require('../models/profiles.model');

module.exports = function (overrides) {
  const base = {
    getProfileData: (req, res) => {
      res.status(200).json({
        getProfileData: "OK"
      });
    },
    getProfiles: async (req, res) => {
      const profiles = await Profiles.find({});

      return res.status(200).json(profiles);
    },
    following: async (req, res) => {
      const { id: _id, profileId } = req.body;

      await Profiles
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

      await Profiles
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

