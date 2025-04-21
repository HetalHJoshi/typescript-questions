if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let completed = 0;
      let total = promises.length;
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (result) => {
            results[index] = result;
            completed++;
            if (completed === total) resolve(results);
          },
          (error) => reject(error)
        );
      });
      if (total === 0) resolve(results);
    });
  };
}
