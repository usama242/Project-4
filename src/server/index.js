let path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const requestPost = require("./requestHandler");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});
const port = 8000;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`The app is running on port ${port}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/article", requestPost.validateInput, requestPost.requestHandler);

exports.app = app;
