function Middleware() {
  var cb = [];
  var that = this; // Storing 'this' ref for supplying as context for middleware 

  // Middleware Task Runner
  function RunNextMiddleware() {
    if( cb.length > 0 ) {
      var middlewareFunc = cb.shift();
      middlewareFunc.call(that, RunNextMiddleware);
    }
  }

  // middleware functions to the queue
  this.use = function(fn) {
    cb.push(fn);
  }

  // Execute the middleware queue
  this.go = function(cb) {
    // Run middle task runner
    RunNextMiddleware();

   // take's out middleware function from queue for processing
   var queuePoller = setInterval(function() {
     if( cb.length == 0 ) {
       clearInterval(queuePoller);
       cb.call(that);
     }
   }, 100);
  }
}

module.exports = Middleware;
