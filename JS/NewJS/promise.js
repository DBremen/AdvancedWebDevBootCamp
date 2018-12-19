/*
a one time guarantee of some future value
  like a ticket at a counter (no queuing after ticket has been received = async)
result  = resolved or rejected
*/
function displayAtRandomTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Yes");
      } else {
        reject("No");
      }
    }, 1000);
  });
}

displayAtRandomTime()
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log(err);
  });

//  chaining promises
//npm install request request-promise
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

var years = [];
var titanicUrl = "https://omdbapi.com?t=titanic&apikey=thewdb";
var shrekUrl = "https://omdbapi.com?t=shrek&apikey=thewdb";
request(getJsonRequestObject(titanicUrl))
  .then(movie => {
    years.push(movie.Year);
    return request(getJsonRequestObject(shrekUrl));
  })
  .then(movie => {
    years.push(movie.Year);
    console.log(years);
  });
//this will get printed first since the requests are running async
console.log("All done");

/* Promise.All

