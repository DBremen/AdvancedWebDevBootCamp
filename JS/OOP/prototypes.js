/*
the new key word creates a link (which can be accessed as __proto__) between the object created and
the prototype property of the constructor function
Every constructor function has a property prototype
The prototype object has a constructor property which points back to the constructor function 
Anytime an object is created using new a property called __proto__ (dunder) gets created 
The prototype is shared by all objects created by the constructor
The objects have access to the new property through __proto__

if a method or a property is called on an object and the object does not implement the called property or function
the prototype chain is used to find the method or property within the chain of prototypes
e.g.:
var arr = new Array
//check where hasOwnProperty is implemented
dir(arr)
//not directly nor under __proto__
//but under the object's prototype
arr.__proto__.__proto__.hasOwnProperty === arr.hasOwnProperty


Person.prototype.constructor === Person
personObject = new Person();
personObject.__proto__ === Person.prototype
*/
function Person(name) {
    this.name = name;
}
console.log(Person.prototype);
var aidan = new Person('Aidan');
var joshua = new Person('Joshua');
console.log(aidan.__proto__ === Person.prototype);
console.log(joshua.__proto__ === Person.prototype);
console.log(aidan.__proto__.constructor === Person);

//the prototype is shared by all objects created by the constructor
//the objects have access to the new property through __proto__
Person.prototype.isSon = true;
console.log(aidan.isSon);
console.log(joshua.isSon);


//functions that are defined within a constructor need to be redifined for every object
//even though they are exactly the same for every object
function Person2(name) {
    this.name = name;
    // this.sayHi = function(){
    //     return 'Hi ' + this.name;
    // };
}
//instead define it on the prototype of the constructor function
Person2.prototype.sayHi = function () {
    return 'Hi ' + this.name;
};
var dirk = new Person2('Dirk');
console.log(dirk.sayHi());

//excersises
// 1 - Create a constructor function for a Person. Each person should have a firstName, 
//lastName, favoriteColor, favoriteNumber)

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName 
//and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family
//  which is an empty array. This will involve you going back and adding an additional line 
//  of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object 
// constructed from the Person constructor to the family array. 
// To make sure that the object you are adding is an object construced from the Person constructor 
// (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! 
// This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/
function Person3(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}
Person3.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};
Person3.prototype.addToFamily = function (person) {
    if (person instanceof Person3 && this.family.indexOf(person) === -1) {
        this.family.push(person);
    }
    return this.family.length;
};
var person = new Person3("Elie", "Schoppik", "purple", 34);
var anotherPerson = new Person3();
console.log(person.addToFamily(anotherPerson));
console.log(person.addToFamily(anotherPerson));
console.log(person.family.length);

console.log(person.addToFamily("test"));
console.log(person.addToFamily({}));
console.log(person.addToFamily([]));
console.log(person.addToFamily(false));
console.log(person.family.length);

// PART II 

// 1 - Implement your own version of Array.prototype.map. 
// The function should accept a callback and return a new array with the result of the callback 
// for each value in the array. 
function myMap(cb) {
    arr = [];
    this.forEach(element => {
        arr.push(cb(element));
    });
    return arr;
}

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
String.prototype.reverse = function () {
    return [].reverse.call(this.split('')).join('');
};
console.log("test".reverse());