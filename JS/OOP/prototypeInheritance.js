/*
two steps (Student inherits from Person)
1. Setting the prototype property of the new constructor 
   function to the prototype of the constructor to be inherited from
   Student.prototype = Object.create(Person.prototype);

2. Resetting the constructor to the child constructor
   Student.prototype.constructor = Student;
*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function () {
    return 'Hello ' + this.firstName + ' ' + this.lastName;
};

function Student(firstName, lastName) {
    return Person.apply(this, arguments);
}
//this is repetitive
// Student.prototype.sayHi = function () {
//     return 'Hello ' + this.firstName + ' ' + this.lastName;
// };
//this works but...
//Student.prototype = Person.prototype;
// var dirk = new Student('Dirk', 'Bremen');
// console.log(dirk.sayHi());
//now it works two ways, modifying the prototype from Studen will also affect Person objects
//this is because Student.prototype and Person.prototype now reference the same object
// Student.prototype.status = function () {
//     return 'I am a student';
// };
// var aidan = new Person('Aidan', 'Bremen');
// console.log(aidan.status());

//instead Object.create can be used since it creates a new object 
//based on the prototype passed as the first argument
Student.prototype = Object.create(Person.prototype);
Student.prototype.status = function () {
    return 'I am a student';
};
var aidan = new Person('Aidan', 'Bremen');
//console.log(aidan.status()); //does not work anymore since the inheritance is only way now
//only now Studen objects have the constructor wrongly pointing to person
console.log(Student.prototype.constructor);
//this needs to be reset manually should be done immediately after the Object.create
Student.prototype.constructor = Student;

//Excersises
// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

// 3 - Add a function to the Vehicle prototype called toString which returns the string 
//"The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Vehicle.prototype.start = function () {
    return 'Vroom!';
};
Vehicle.prototype.toString = function () {
    return 'The make, model, and year are: ' + this.make + ', ' + this.model + ', ' + this.year;
};
var vehicle = new Vehicle("Tractor", "John Deere", 1999);
console.log(vehicle.toString()); // 'The make, model, and year are Tractor John Deere 1999'

// 4 - Create a constructor function for a Car. 
//Each object created from the Car function should also have a make, model, and year
// and a property called numWheels which should be 4. 
//The Car prototype should inherit all of the methods from the Vehicle prototype
function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


// 5 - Create a constructor function for a Motorcycle. 
//Each object created from the Motorcycle function should also have a make, model, and year and 
//a property called numWheels which should be 2. 
//The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;