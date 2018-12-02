function callback() {
  console.log("Coming from callback");
}

function hihgerOrder(fn) {
  console.log("About to call callback");
  fn();
  console.log("Callback has been invoked");
}

hihgerOrder(callback);
