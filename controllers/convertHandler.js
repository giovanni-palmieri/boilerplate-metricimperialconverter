function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit) {
      case "gal":
        result = initNum * galToL
        break;
      case "L":
        result = initNum / galToL
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = this.convert(initNum, initUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
