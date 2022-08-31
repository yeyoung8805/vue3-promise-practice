function a(callback) {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 1000);
}

a(function () {
  b(function () {
    console.log("Done!");
  });
});
