// function a(callback) {
//   setTimeout(() => {
//     console.log("A");
//     callback();
//   }, 1000);
// }

function a() {
  //promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("A");
      resolve("Hello A");
    }, 1000);
  });
}

function b() {
  //promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("B");
      resolve("Hello B");
    }, 1000);
  });
}

function c() {
  //promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("C");
      resolve("Hello C");
    }, 1000);
  });
}

function d() {
  //promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("D");
      resolve("Hello D");
    }, 1000);
  });
}

async function test() {
  await a();
  await b();
  await c();
  await d();
  console.log("Done!");
}
test();
