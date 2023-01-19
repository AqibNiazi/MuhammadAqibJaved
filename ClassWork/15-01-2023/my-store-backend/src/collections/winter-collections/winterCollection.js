const { winterCollectionService } = require("../../services");
const winterCollection = (req, res) => {
  return winterCollectionService.winterCollection(req, res);
};
const winterJackets = (req, res) => {
  return winterCollectionService.winterJackets(req, res);
};
const winterShirt=(req,res)=>{
    return winterCollectionService.winterShirt(req,res);
};
const winterPants=(req,res)=>{
    return winterCollectionService.winterPants(req,res);
};
module.exports = {
  winterCollection,
  winterJackets,
  winterShirt,
  winterPants,
};
