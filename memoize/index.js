function Memoizer(cb) {

  // Fn will be cached as StringifiedFn-ParamsPassed
  var CachedResult = {};
  var stringifiedFn = typeof cb === 'function' ? cb.toString().replace(/\s/g,'') : '';  

  return function() {
    var args = Array.prototype.slice.call(arguments);
    var cacheKey = stringifiedFn + args.toString();
    if( !CachedResult.hasOwnProperty(cacheKey) ) {
      CachedResult[cacheKey] = cb.apply(Memoizer, args); // Memoizer as been set as Context as no need to handle 'this' case
    }
    return CachedResult[cacheKey];
  }
}

module.exports = Memoizer;
