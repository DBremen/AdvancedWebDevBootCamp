//objects
//https://dev.to/sarah_chima/object-destructuring-in-es6-3fm

var person = { name: "Sarah", country: "Nigeria", job: "Developer" };
var { name, country, job } = person;

console.log(name); //"Sarah"
console.log(country); //"Nigeria"
console.log(job); //Developer"

//It is also valid to assign variables with an object literal
var { name, country, job } = {
  name: "Sarah",
  country: "Nigeria",
  job: "Developer"
};

console.log(name); //"Sarah"
console.log(country); //"Nigeria"
console.log(job); //Developer"

//assigning to variables without declaration requires parenthesis
var person = { name: "Sarah", country: "Nigeria", job: "Developer" };
var name, country, job;

({ name, country, job } = person);

//default values
var person = { name: "Sarah", country: "Nigeria", job: "Developer" };
var { name = "myName", friend = "Annie" } = person;

console.log(name); //"Sarah"
console.log(friend); //"Annie"

//changing names and default values
var person = { name: "Sarah", country: "Nigeria", job: "Developer" };
var { name: foo = "myName", friend: bar = "Annie" } = person;

console.log(foo); //"Sarah"
console.log(bar); //"Annie"

//nested objects
var person = {
  name: "Sarah",
  place: {
    country: "Nigeria",
    city: "Lagos"
  },
  friends: ["Annie", "Becky"]
};

var {
  name: foo,
  place: { country: bar, city: x }
} = person;

console.log(foo); //"Sarah"
console.log(bar);

/*
The rest operator syntax can also be used to pick up property keys 
that are not already picked up by the destructuring pattern. 
Those keys and their values are copied onto a new object. Look at the example below.
*/
var person = {
  name: "Sarah",
  country: "Nigeria",
  job: "Developer",
  friends: ["Annie", "Becky"]
};
var { name, friends, ...others } = person;

console.log(name); //"Sarah"
console.log(friends); //["Annie", "Becky"]
console.log(others); // {country: "Nigeria", job: "Developer"}

//Object Destructuring can be used to assign parameters to functions. We can use an example here.
//the ={} is necessary
function person2({ name: x = "Dirk", job: y } = {}) {
  console.log(x);
}

person2({ name: "Michelle" }); //"Michelle"
person2(); //Dirk
