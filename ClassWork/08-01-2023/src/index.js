// create express app
// create routes
// listen to any port we give it to app
// run start
const express = require("express");
// const bodyParser = require("body-parser");
const router = require("./collections");
const app = express();
const cors = require("cors");
const NodeJsServer = () => {
  try {
    // app.use(bodyParser.json());
    app.use(cors());
    app.use(router());
    app.listen(9000, () =>
      console.log("app is running on port http://localhost:9000")
    );
  } catch (error) {
    console.log("error", error);
  }
};
NodeJsServer();
