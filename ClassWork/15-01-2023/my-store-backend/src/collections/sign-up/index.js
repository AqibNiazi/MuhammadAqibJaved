const express = require("express");
const signUp = require("./signUp");
const routes = express.Router();
module.exports = () => {
  routes.post("/", signUp);
  return routes;
};
