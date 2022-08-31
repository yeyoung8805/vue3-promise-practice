function a(callback) {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 1000);
}

function b() {
  console.log("B");
}
a(function () {
  b();
});
