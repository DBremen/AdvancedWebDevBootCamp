//by convention the name of the function should start with a capital
/*
new (used with a constructor function):
1. sets the keyword this to be an empty object
2. adds a property to the empty object called "__proto__", which links the prototype
  property on the constructor function to the empty object (__ = dunder)
3. adds 'return this' at the end of the function body
*/
function House(bedrooms, bathrooms, numSqft) {
  //1. var this = {};
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
  //3. return this
}
var firstHouse = new House(2, 2, 1000);
console.log(firstHouse);

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function () {
    return this.name + " just barked!";
  };
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);
console.log(rusty.bark());
console.log(fido.bark());

//multiple constructors
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  // this.make = make;
  // this.model = model;
  // this.year = year;
  //instead call the constructor on car passing this (Motorcylce) as the thisArg
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

//excercises
// PART 1

// Create a constructor function for a Person, each person should have a firstName, 
//lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of
// the number and the object created from the Person functions' favorite number.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function (num) {
    return num * this.favoriteNumber;
  };
}

// PART 2

// Given the following code - refactor the Child function to remove all the duplication 
//from the Parent function. You should be able to remove 4 lines of code in the Child function 
//and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
  //Parent.call(this, firstName, lastName, favoriteColor);
  //shorter
  Parent.apply(arguments);
}