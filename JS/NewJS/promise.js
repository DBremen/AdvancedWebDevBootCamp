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
takes an array of promises
it rejects of one of the promises rejects
*/

function getMovie(movie) {
  var movieUrl = `https://omdbapi.com?t=${movie}&apikey=thewdb`;
  return request(getJsonRequestObject(movieUrl));
}

var requests = [];
var titanicPromise = requests.push(getMovie("titanic"));
var shrekPromise = requests.push(getMovie("shrek"));
var braveheartPromise = requests.push(getMovie("braveheart"));
Promise.all(requests).then(movies => {
  return movies.forEach(movie => {
    console.log(movie.Year);
  });
});

/*
S2015 Promises Assignment

1. Write a function called getMostFollowers, which accepts a variable number of arguments. 
You should then make an AJAX call to the Github User API 
(https://developer.github.com/v3/users/#get-a-single-user)
 to get the name and number of followers of each argument. 
 The function should return a promise, which when resolved, returns a string 
 which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the
 jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
*/
function getMostFollowers(...userNames) {
  let requests = [];
  userNames.forEach(userName => {
    requests.push(
      request(getJsonRequestObject(`https://api.github.com/users/${userName}`))
    );
  });
  return Promise.all(requests).then(users => {
    ghUsers = [];
    users.forEach(user => {
      ghUsers.push(user);
    });
    ghUsers.sort((a, b) => parseInt(a.followers) < parseInt(b.followers));
    return `${ghUsers[0].login} has the most followers with ${
      ghUsers[0].followers
    }`;
  });
}
getMostFollowers("elie", "tigarcia", "colt").then(function(data) {
  console.log(data);
});

// "Colt has the most followers with 424"

/*
. Write a function called starWarsString, which accepts a number. 
You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) 
to search for a specific character by the number passed to the function. 
Your function should return a promise that when resolved will console.log the name of the character.

    starWarsString(1).then(function(data){
        console.log(data)
    })
     
    "Luke Skywalker"
*/

function starWarsString(num){
  return request(getJsonRequestObject(`https://swapi.co/api/people/${num}`)).then(response=>{
    return response.name;
  });
}
starWarsString(1).then(function(data){
  console.log(data)
});

//"Luke Skywalker"

