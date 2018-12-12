/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
  .get(function (req, res){
    console.log(req.query.input);
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    if(initNum==='error'||initUnit==='error'){
      if(initUnit==='error'){
        return res.send('invalid number and unit');
      }
      else{
        return res.send('invalid number');
      }
    }
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    console.log({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string:toString});
    return res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string:toString});




    //res.json
    });
    
};
