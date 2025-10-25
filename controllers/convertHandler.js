function ConvertHandler() {
  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case "l":
        result = "liters";
        break;
      case "gal":
        result = "gallons";
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const lowercaseUnit = initUnit.toLowerCase();

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (lowercaseUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
    }

    const returnNum = result.toFixed(5);
    const returnUnit = this.getReturnUnit(lowercaseUnit);
    const initUnitString = this.spellOutUnit(lowercaseUnit);
    const returnUnitString = this.spellOutUnit(returnUnit);

    return {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`,
    };
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = this.convert(initNum, initUnit);

    return result;
  };
}

module.exports = ConvertHandler;
