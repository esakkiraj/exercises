module.exports = function( inputArr, cb, ctx ) {

  var length = Array.isArray(inputArr) ? inputArr.length : 0;
  var result = [];
  var cbWithCtx = cb.bind(ctx); // cb has been binded with ctx
  for( var i=0; i<length; i++) {
    result.push(
      cbWithCtx(inputArr[i], i, inputArr)
    );
  }

  return result;
}
