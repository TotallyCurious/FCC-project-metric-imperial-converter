/*
*
*
*       Complete the handler logic below
*       
*       
*/
function ConvertHandler() {
  
  this.getNum = function(input) {
    var res = /[a-z]/i.exec(input);
    if(!res)return'';
    var num = input.substring(0,res.index);
    // let patt = new RegExp(/\d+((\/+\d+)?|(\.+\d+(\/{1}\d+(\.+\d+)?)?)?)?/gi);
    // console.log('getnum: ',input.match(patt));
    // var num = input.match(patt);
    console.log(num,typeof((num)*1),res);
    try{
      eval(num);    
    }
    catch(e){
      console.log('invalid number');
      return 'invalid number';
    }
    if (!num)return 1;
    return num;
  };
  
  this.getUnit = function(input) {
    // let patt = new RegExp(/[a-z]+/gi);
    // console.log('getunit: ',input.match(patt));
    // var unit = input.match(patt);
    var res = /[a-z]/i.exec(input);
    var unit=input.substring(res.index);
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'gal'||'GAL':
        return 'l';
        break;
      case 'l'||'L':
        return 'gal';
        break;
      case 'lbs'||'LBS':
        return 'kg';
        break;
      case 'kg'||'KG':
        return 'lbs';
        break;
      case 'mi'||'MI':
        return 'km';
        break;
      case 'km'||'KM':
        return 'mi';
        break;
      default:
        return 'invalid unit';
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
    try{
      initNum = eval(initNum);    
    }
    catch(e){
      console.log('invalid number');
      return 'invalid number';
    }
    
    switch(initUnit){
      case 'gal':
        return initNum*galToL;
        break;
      case 'l':
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
