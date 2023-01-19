const express = require("express");
const login = require("./login");
const routes = express.Router();
module.exports = () => {
  routes.post("/",login );
  return routes;
};
