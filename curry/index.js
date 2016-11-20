function SpicyCurry(fn) {

  var totalArgumentsNeeded = fn.length;

  function ArgsCollector() {
    var args = Array.prototype.slice.call(arguments); // Converting Array-like arguments into Array

    if( args.length >= totalArgumentsNeeded ) {
      return fn.apply(fn, args.slice(0, totalArgumentsNeeded)); // If neccessary number of arguments are collected then execute the fn and return the result
    } else {
      return ArgsCollector.bind.apply(ArgsCollector, [null].concat(args)); // Else send the ArgsCollector in the mission to collect the remaining arguments. Tip from 2ality.com spread operator article. 
    }
  }

  return ArgsCollector; // Function whose task is to collect the arguments.
}

module.exports = SpicyCurry;
