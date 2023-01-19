const express = require("express");
const winterCollection = require("./winterCollection");
const routes = express.Router();
module.exports = () => {
  //sub routes
  routes.get("/", winterCollection.winterCollection);
  routes.get("/jackets", winterCollection.winterJackets);
  routes.get("/winter-shirts", winterCollection.winterShirt);
  routes.get("/winter-pants", winterCollection.winterPants);

  return routes;
};
