let path = require("path");
const dotenv = require("dotenv");
dotenv.config();

function validateInput(req, res, next) {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  return next();
}

const app_id = process.env.API_ID;
const app_key = process.env.API_KEY;
function requestHandler(req, res, next) {
  const aylien = require("aylien_textapi");

  const textApi = new aylien({
    application_id: app_id,
    application_key: app_key,
  });
  textApi.sentiment(
    {
      url: req.body.text,
    },
    function (error, response) {
      res.send(response);
    }
  );
}

exports.validateInput = validateInput;
exports.requestHandler = requestHandler;
