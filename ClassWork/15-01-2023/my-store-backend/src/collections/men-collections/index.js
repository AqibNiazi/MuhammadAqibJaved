const express = require("express");
const routes = express.Router();
const menCollection=require("./menCollection")
module.exports = () => {
  routes.get("/",menCollection);
  return routes;
};
