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

function c(callback) {
  setTimeout(() => {
    console.log("C");
    callback();
  }, 1000);
}

function d(callback) {
  setTimeout(() => {
    console.log("D");
    callback();
  }, 1000);
}

a(function () {
  b(function () {
    c(function () {
      d(function () {
        console.log("Done!");
      });
    });
  });
});
