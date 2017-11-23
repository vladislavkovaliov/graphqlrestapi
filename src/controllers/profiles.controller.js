module.exports = function (overrides) {
  const base = {
    getProfileData: (req, res) => {
      console.log(42);
      res.status(200).json({
        getProfileData: "OK"
      });
    }
  };

  return { ...base, ...overrides};
}
