async function first() {
  return "We did it";
}
// returns a promise
first().then(val => console.log(val));

// await can also be used inside async functions
// 1. await pauses the execution of an async function (like a pause button)
// 2. followed by a promise
// 3. waits for the promise to be resolved
// 4. resumes executio nof the async function
// 5. returns the resolved value

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

async function getMovie() {
  var titanicUrl = "https://omdbapi.com?t=titanic&apikey=thewdb";
  console.log("starting");
  var movieData = await request(getJsonRequestObject(titanicUrl));
  // this line does not run before the promise is resolved
  console.log("done");
  console.log(movieData.Title);
}

getMovie();

//also as method
class Movie {
  constructor(name) {
    this.name = name;
  }

  async getMovie() {
    try {
      var movie = await request(
        getJsonRequestObject(`https://omdbapi.com?t=${this.name}&apikey=thewdb`)
      );
      console.log("class Movie");
      console.log(movie.Title);
    } catch (e) {
      console.log(e);
    }
  }
}
new Movie("titanic").getMovie();

//working with multiple requests
//this does it sequentially
// async function getMovie() {
//   var titanicUrl = "https://omdbapi.com?t=titanic&apikey=thewdb";
//   var shrekUrl = "https://omdbapi.com?t=shrek&apikey=thewdb";
//   console.log("starting");
//   var movieData1 = await request(getJsonRequestObject(titanicUrl));
//   // this line does not run before the promise is resolved
//   var movieData2 = await request(getJsonRequestObject(shrekUrl));
//   console.log(movieData);
//   console.log(movieData2);
// }

//better start the requests in parallel and then await there resolved promises
async function getMovie() {
  var titanicUrl = "https://omdbapi.com?t=titanic&apikey=thewdb";
  var shrekUrl = "https://omdbapi.com?t=shrek&apikey=thewdb";
  console.log("starting");
  var promise1 = request(getJsonRequestObject(titanicUrl));
  var promise2 = request(getJsonRequestObject(shrekUrl));
  var movie1 = await promise1;
  var movie2 = await promise2;
  console.log(movie1.Title);
  console.log(movie2.Title);
}
