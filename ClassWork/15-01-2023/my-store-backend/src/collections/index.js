const express = require("express");
const routes = express.Router();
const home = require("./home");
const menCollections = require("./men-collections");
const womenCollections = require("./women-collections");
const childrenCollections = require("./children-collection");
const winterCollections = require("./winter-collections");
const summerCollections = require("./summer-collections");
const login = require("./login");
const signUp = require("./sign-up");

module.exports = () => {
  //Main routes
  routes.use("/home", home());
  routes.use("/men-collection", menCollections());
  routes.use("/women-collection", womenCollections());
  routes.use("/children-collection", childrenCollections());
  routes.use("/winter-collection", winterCollections());
  routes.use("/summer-collection", summerCollections());
  routes.use("/login", login());
  routes.use("/sign-up", signUp());
  return routes;
};
