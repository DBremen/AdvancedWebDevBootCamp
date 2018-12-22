/*
special kind of function which can be paused and resumed at any time
created using a *
when invoked a generator object is returned with the keys of value and done
value is returned from the paused function using the yield keyword
done is a boolean which returns true when the function has completed
*/

function* pauseAndReturnValues(num) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}
var gen = pauseAndReturnValues(3);
console.log(gen.next()); //{ value: 0, done: false }
console.log(gen.next()); //{ value: 1, done: false }
console.log(gen.next()); //{ value: 2, done: false }
console.log(gen.next()); //{ undefined, done: true }

//generators implement Symbol.iterator
for (val of pauseAndReturnValues(3)) {
  console.log(val);
}

function* printValues() {
  yield "firstValue";
  yield "secondValue";
  yield "thirdValue";
}
var g = printValues();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

var request = require("request-promise");

function getJsonRequestObject(url) {
  return {
    method: "GET",
    uri: url,
    json: true,
    headers: {
      "User-Agent": "My little demo app"
    }
  };
}

function* getMovie(movie) {
  console.log("Starting");
  yield request(
    getJsonRequestObject(`https://omdbapi.com?t=${movie}&apikey=thewdb`)
  );
  console.log("Stopping");
}
getMovie('titanic').next().value.then(movie=>console.log(movie.Plot));