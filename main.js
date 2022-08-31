function a() {
  setTimeout(() => {
    console.log("A");
  }, 1000);
}

function b() {
  console.log("B");
}
a();
b();
