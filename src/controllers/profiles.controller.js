const { Profiles } = require('../models/profiles.model');

module.exports = function (overrides) {
  const base = {
    getProfileData: (req, res) => {
      res.status(200).json({
        getProfileData: "OK"
      });
    },
    getProfiles: async (req, res, next) => {
      try {
        const profiles = await Profiles.find({});

        return res.status(200).json(profiles);
      } catch(ex) {
        next({
          statusCode: 500,
          status: 500,
          msg: ex.message,
        });
      }
    },
    deleteById: async (req, res, next) => {
      const { profileId } = req.params;

      try {
        const profile = await Profiles.findByIdAndRemove(profileId);

        res.status(200).json(profile);
      } catch(ex) {
        next({
          statusCode: 404,
          status: 404,
          msg: ex.message,
        });
      }

    },
    following: async (req, res, next) => {
      const { id: _id, profileId } = req.body;

      try {
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
      } catch(ex) {
        next({
          statusCode: 500,
          status: 500,
          msg: ex.message,
        });
      }
    },
    followers: async (req, res, next) => {
      const { id: _id, profileId } = req.body;

      try {
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
      } catch(ex) {
        next({
          statusCode: 500,
          status: 500,
          msg: ex.message,
        });
      }
    },
  };

  return { ...base, ...overrides};
};

