console.log("sript start");
//! 重点不是async ，而是await，如果没有awit，类似于promise的回调，也是同步执行
async function async1() {
  await async2();
  // await 后面的代码就是放到微任务队列中，相对于将
  // `console.log('async1 end')`代码放到 then中
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}

async1();

setTimeout(() => {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve(undefined);
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("end");
// sript start
// async2 end
// Promise
// end
// async1 end
// promise1
// promise2
// setTimeout
