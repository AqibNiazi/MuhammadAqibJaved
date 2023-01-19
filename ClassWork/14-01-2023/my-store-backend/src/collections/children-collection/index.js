const express = require("express");
const childrenCollection = require("./childrenCollection");
const routes = express.Router();
module.exports = () => {
  routes.get("/", childrenCollection);
  return routes;
};
