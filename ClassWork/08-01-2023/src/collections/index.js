const express = require("express");
const routes = express.Router();
const home = require("./home");
const menCollections = require("./men-collections");
const womenCollections = require("./women-collections");
const childrenCollections = require("./children-collection");
const winterCollections = require("./winter-collections");
const summerCollections = require("./summer-collections");

module.exports = () => {
//Main routes

  routes.use("/home", home());
  routes.use("/men", menCollections());
  routes.use("/women", womenCollections());
  routes.use("/children", childrenCollections());
  routes.use("/winter", winterCollections());
  routes.use("/summer", summerCollections());
  return routes;
};
