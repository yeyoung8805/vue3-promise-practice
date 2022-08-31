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
  console.log("B");
}
async function test() {
  // const res = await axios.get();
  const res = await a();
  console.log('res:', res);
  b();
}
test();
