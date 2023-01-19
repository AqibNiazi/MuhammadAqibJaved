const express = require("express");
const routes = express.Router();
const home = require("./home");

module.exports = () => {
  routes.get("/", home);
  return routes;
};
