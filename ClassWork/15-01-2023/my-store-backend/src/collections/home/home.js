const { HomeServices } = require("../../services");

module.exports = (req, res) => {
  return HomeServices.home(req, res);
};
