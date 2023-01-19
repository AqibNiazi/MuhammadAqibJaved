const { MenCollectionServices } = require("../../services");

module.exports = (req, res) => {
  return MenCollectionServices.menCollection(req, res);
};
