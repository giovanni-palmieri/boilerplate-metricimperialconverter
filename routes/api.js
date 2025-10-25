"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");
const { splitParam } = require("../util/utils.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    console.log("Input: ", input);

    const [value, unit] = splitParam(input);

    res.send(convertHandler.convert(value, unit));
  });
};
