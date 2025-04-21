function Promise(executor) {
  this.state = "pending"; // Without the underscore
  this.value = undefined;
  this.onFulfilled = null;

  const self = this;

  function resolve(value) {
    self.state = "fulfilled";
    self.value = value;
    if (self.onFulfilled) self.onFulfilled(value);
  }

  function reject(reason) {
    self.state = "rejected";
    self.value = reason;
  }

  this.then = function (onFulfilled) {
    if (self.state === "fulfilled") {
      onFulfilled(self.value);
    } else {
      self.onFulfilled = onFulfilled;
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Done!"), 1000); // Resolve after 1 second
}).then(function (result) {
  console.log(result); // This should log: "Done!"
});
