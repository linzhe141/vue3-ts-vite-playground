function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    let countNum = 0;
    const promiseNum = promises.length;
    const resolvedvalue = new Array(promiseNum);
    for (const i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(
          function (value) {
            countNum++;
            resolvedvalue[i] = value;
            if (countNum === promiseNum) {
              return resolve(resolvedvalue);
            }
          },
          function (reason) {
            return reject(reason);
          }
        );
      })(i);
    }
  });
}
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(function (value) {
  console.log(value);
});
