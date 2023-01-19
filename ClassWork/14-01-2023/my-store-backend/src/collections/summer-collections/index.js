const express = require("express");
const summerCollection = require("./summerCollection");
const routes = express.Router();
module.exports = () => {
  routes.get("/", summerCollection);
  return routes;
};
