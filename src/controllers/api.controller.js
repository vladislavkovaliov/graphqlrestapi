module.exports = function (overrides) {
  const base = {
    getPingPong: (req, res) => {
      res.status(200).json({
        pingPong: "OK"
      });
    }
  };

  return { ...base, ...overrides};
}
