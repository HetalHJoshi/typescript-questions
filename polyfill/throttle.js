if (!Function.prototype.throttle) {
  Function.prototype.throttle = function (delay) {
    const fn = this;
    let lastTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= delay) {
        lastTime = now;
        return fn.apply(this, args);
      }
    };
  };
}
