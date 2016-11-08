// Code needs improvement
function Flatter(arrArgs, resultArr) {
  var result = resultArr || [];

  for( var i=0; i<arrArgs.length; i++) {
    var val = arrArgs[i];

    if( Array.isArray(val) ) {
      Flatter(val, result);
    } else {
      result.push(val);
    }
  }
  
  return result;
}

module.exports = Flatter;
