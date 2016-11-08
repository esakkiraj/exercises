
// Remember 'Recursion' 
function ValueResolver(val) {
  
  if( typeof val !== 'function' )  return val;

  var result = val();
  return ValueResolver(result);
}

module.exports = ValueResolver;
