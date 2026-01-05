const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", () => {
    const input = "2km";
    assert.equal(convertHandler.getNum(input), 2);
  });

  test("convertHandler should correctly read a decimal number input.", () => {
    const input = "2.1km";
    assert.equal(convertHandler.getNum(input), 2.1);
  });

  test("convertHandler should correctly read a fractional input.", () => {
    const input = "4/2km";
    assert.equal(convertHandler.getNum(input), 2);
  });

  test("convertHandler should correctly read a fractional input with a decimal.", () => {
    const input = "3.0/1.5km";
    assert.equal(convertHandler.getNum(input), 2);
  });

  test("convertHandler should correctly return an error on a double-fraction.", () => {
    const input = "3/2/3km";
    assert.isNull(convertHandler.getNum(input));
  });

  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", () => {
    const input = "km";
    assert.equal(convertHandler.getNum(input), 1);
  });

  test("convertHandler should correctly read each valid input unit.", () => {
    assert.equal(convertHandler.getUnit("1gal"), "gal");
    assert.equal(convertHandler.getUnit("1L"), "L");
    assert.equal(convertHandler.getUnit("1lbs"), "lbs");
    assert.equal(convertHandler.getUnit("1kg"), "kg");
    assert.equal(convertHandler.getUnit("1mi"), "mi");
    assert.equal(convertHandler.getUnit("1km"), "km");
  });

  test("convertHandler should correctly return an error for an invalid input unit.", () => {
    const input = "1fake";
    assert.isNull(convertHandler.getUnit(input));
  });

  test("convertHandler should correctly read each valid input unit.", () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
  });

  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", () => {
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
    assert.equal(convertHandler.spellOutUnit("L"), "liters");
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
  });

  test("convertHandler should correctly convert gal to L.", () => {
    assert.approximately(convertHandler.convert(1, "gal"), 3.78541, 0.1);
  });

  test("convertHandler should correctly convert L to gal", () => {
    assert.approximately(convertHandler.convert(3.78541, "L"), 1, 0.1);
  });

  test("convertHandler should correctly convert mi to km", () => {
    assert.approximately(convertHandler.convert(1, "mi"), 1.60934, 0.1);
  });

  test("convertHandler should correctly convert km to mi", () => {
    assert.approximately(convertHandler.convert(1.60934, "km"), 1, 0.1);
  });

  test("convertHandler should correctly convert lbs to kg", () => {
    assert.approximately(convertHandler.convert(1, "lbs"), 0.45359, 0.1);
  });

  test("convertHandler should correctly convert kg to lbs", () => {
    assert.approximately(convertHandler.convert(0.45359, "kg"), 1, 0.1);
  });
});
