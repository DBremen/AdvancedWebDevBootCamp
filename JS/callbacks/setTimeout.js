// setTimeout is a function that asynchronously invokes a callback
// after a delay in milliseconds

var delay = 5000;
function callback() {
  console.log("I waited for " + delay / 1000 + " second(s)");
}

var timerId = setTimeout(callback, delay);
//cancel timeout
clearTimeout(timerId);

// setInterval continuously invokes a callback after every x milliseconds

var i = 0;
var id = setInterval(() => {
  console.log("Callback called", ++i, "times");
  if (i === 3) {
    clearInterval(id);
  }
}, 3000);
