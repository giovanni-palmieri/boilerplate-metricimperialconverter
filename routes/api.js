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

    if (!initNum && !initUnit) {
      return res.send("invalid number and unit");
    } else if (!initNum) {
      return res.send("invalid number");
    } else if (!initUnit) {
      return res.send("invalid unit");
    }

    if (initUnit) {
      initUnit =
        initUnit === "l" || initUnit === "L" ? "L" : initUnit.toLowerCase();
    }

    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);

    if (!returnNum && !returnUnit) {
      return res.send("invalid number and unit");
    } else if (!returnNum) {
      return res.send("invalid number");
    } else if (!returnUnit) {
      return res.send("invalid unit");
    }

    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit,
    );

    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
  });
};
