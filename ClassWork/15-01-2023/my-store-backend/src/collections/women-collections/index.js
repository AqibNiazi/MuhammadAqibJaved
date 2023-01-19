const express = require("express");
const womenCollection = require("./womenCollection");
const routes = express.Router();
module.exports = () => {
  routes.get("/", womenCollection);
  return routes;
};
