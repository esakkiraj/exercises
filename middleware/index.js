class Middleware {
  constructor() {
    this.funcs = []
    this.finalFunc = null
  }

  use(fn) {
    this.funcs.push(fn)
  }

  _runNextInQueue() {
    const nextInQueue = this.funcs.shift()
    if (nextInQueue) {
      nextInQueue.call(this, this._runNextInQueue.bind(this))
    } else if (this.finalFunc) {
      this.finalFunc.call(this)
    }
  }

  go(finalFunc) {
    this.finalFunc = finalFunc
    this._runNextInQueue()
  }
}

module.exports = Middleware
