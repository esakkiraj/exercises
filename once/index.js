function OnceReducer(fn) {
  var executedOnce = false, result;

  return function() {
    if( executedOnce ) {
      return result;
    }
    executedOnce = true;
    result = fn.apply(this, arguments);
    return result;
  }
}

module.exports = OnceReducer;
