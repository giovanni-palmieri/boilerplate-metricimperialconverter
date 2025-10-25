'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert/:param", (req, res) => {
    console.log(req.params.param)
    const param = req.params.param

    const [, value, unit] = param.match(/([0-9]*)(.*)/)


    res.send()
  })
};
