const home = (req, res) => {
  const data = "i am a data";
  res.json({ data });
};

module.exports = {
  home,
};
