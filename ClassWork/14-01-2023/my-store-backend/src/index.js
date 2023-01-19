// create express app
// create routes
// listen to any port we give it to app
// run start
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./collections");
const database = require("./database");
const app = express();
const cors = require("cors"); //make connection between frontend and backend
const NodeJsServer = async () => {
  try {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(router());
    await database();
    app.listen(9000, () =>
      console.log("app is running on port http://localhost:9000")
    );
  } catch (error) {
    console.log("error", error);
  }
};
NodeJsServer();
