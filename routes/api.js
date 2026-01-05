"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");
const { splitParam } = require("../util/utils.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    let input = req.query.input;

    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    console.log("input: ", input);

    if (!initNum && !initUnit) {
      console.log("invalid number and unit");
      return res.send("invalid number and unit");
    } else if (!initNum) {
      console.log("invalid number");
      return res.send("invalid number");
    } else if (!initUnit) {
      console.log("invalid unit");
      return res.send("invalid unit");
    }

    if (initUnit) {
      initUnit =
        initUnit === "l" || initUnit === "L" ? "L" : initUnit.toLowerCase();
    }

    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);

    if (!returnNum && !returnUnit) {
      console.log("invalid number and unit");
      return res.send("invalid number and unit");
    } else if (!returnNum) {
      console.log("invalid number");
      return res.send("invalid number");
    } else if (!returnUnit) {
      console.log("invalid unit");
      return res.send("invalid unit");
    }

    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit,
    );

    console.log("Output: ", {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
  });
};
