module.exports = function (overrides) {
  const base = {
    getProfileData: (req, res) => {
      res.status(200).json({
        getProfileData: "OK"
      });
    }
  };

  return { ...base, ...overrides};
};

