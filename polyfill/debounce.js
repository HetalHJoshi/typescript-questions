if (!Function.prototype.debounce) {
  Function.prototype.debounce = function (delay) {
    const fn = this;
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  };
}
