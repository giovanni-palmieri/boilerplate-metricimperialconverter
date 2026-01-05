function ConvertHandler() {
  this.getNum = function (input) {
    const firstLetterMatch = input.match(/[a-zA-Z]/);
    const index = firstLetterMatch ? firstLetterMatch.index : input.length;
    let numStr = input.slice(0, index);

    if (numStr === "") return 1;

    const parts = numStr.split("/");

    for (const part of parts) {
      if (part === "") return null;
    }
    if (parts.length > 2) return null;

    const hasMultipleDecimals = parts.some(
      (part) => (part.match(/\./g) || []).length > 1,
    );
    if (hasMultipleDecimals) return null;

    try {
      const num1 = parts[0];
      const num2 = parts[1] || "1";

      const n1 = Number(num1);
      const n2 = Number(num2);

      if (isNaN(n1) || isNaN(n2) || n2 === 0) return null;

      return n1 / n2;
    } catch (e) {
      return null;
    }
  };

  this.getUnit = function (input) {
    let result;
    result = input.match(/[a-zA-Z]+/g);
    result = result ? result[0] : null;

    return result &&
      ["gal", "l", "lbs", "kg", "mi", "km"].includes(result.toLowerCase())
      ? result
      : null;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = null;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    if (!unit) {
      return null;
    }

    switch (unit.toLowerCase()) {
      case "l":
        result = "liters";
        break;
      case "gal":
        result = "gallons";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = null;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }

    if (!result) {
      return result;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    result =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
