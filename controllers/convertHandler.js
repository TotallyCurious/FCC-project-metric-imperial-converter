/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var patt = '\d+((\/+\d+)?|(\.+\d+(\/{1}\d+(\.+\d+)?)?)?)?'
    var num = patt.exec(input);
    if (!num)num=1;
    return num;
  };
  
  this.getUnit = function(input) {
    ['L','gal','lbs','kg','km','mi'].indexOf(input.split)>=0?;
    
    
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'gal':
        return 'L';
        break;
      case 'L':
        return 'gal';
        break;
      case 'lbs':
        return 'kg';
        break;
      case 'kg':
        return 'lbs';
        break;
      case 'mi':
        return 'km';
        break;
      case 'km':
        return 'mi';
        break;
      default:
        return 'error';
        break;      
               }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case 'gal':
        return 'gallons';
        break;
      case 'L':
        return 'litres';
        break;
      case 'lbs':
        return 'pounds';
        break;
      case 'kg':
        return 'kilograms';
        break;
      case 'mi':
        return 'miles';
        break;
      case 'km':
        return 'kilometers';
        break;
      default:
        break;      
               }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    !initNum?initNum = 1:initNum = Math.eval(initNum);
    
    switch(initUnit){
      case 'gal':
        return initNum*galToL;
        break;
      case 'L':
        return initNum/galToL;
        break;
      case 'lbs':
        return initNum*lbsToKg;
        break;
      case 'kg':
        return initNum/lbsToKg;
        break;
      case 'mi':
        return initNum*miToKm;
        break;
      case 'km':
        return initNum/miToKm;
        break;
      default:
        break;      
                   }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = [initNum,this.spellOutUnit(initUnit),'converts to',returnNum,this.spellOutUnit(returnUnit)].join(' ');
    
    return result;
  };
  
}

module.exports = ConvertHandler;
