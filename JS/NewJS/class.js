/*jshint esversion:6 */
class Student {
  constructor(firstName, lastName) {
    Object.assign(this, {
      firstName,
      lastName
    });
  }
  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  static isStudent(obj) {
    if (obj.constructor === Student) {
      console.log("This is a student");
    } else {
      console.log("This is not a student");
    }
  }
}
let test = { firstName: "Dirk", lastName: "Bremen" };
Student.isStudent(test);
new Student("Dirk", "Bremen").printName();

//inherticance
class MathStudent extends Student {
  constructor(firstName, lastName, favoriteNumber) {
    super(firstName, lastName);
    this.favoriteNumber = favoriteNumber;
  }
}

let mStud = new MathStudent("Josh", "Bremen", Math.PI);
mStud.printName();
Student.isStudent(mStud);

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
// 2 - Add an instance method called start which returns the string "VROOM!"
// 3 - Add an instance method called toString which returns the string "The make, model, and year are"
//     concatenated with the make, model and year property
class Vehicle {
  constructor(make, model, year) {
    Object.assign(this, {
      make,
      model,
      year
    });
  }
  start() {
    return "VROOM!";
  }
  toString() {
    return `The make, model, and year are ${this.make} ${this.model} ${
      this.year
    }`;
  }
}
var vehicle = new Vehicle("Tractor", "John Deere", 1999);
console.log(vehicle.toString());

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/
// 4 - Create a class for a Car. Each object created from the Car
//   function should also have a make, model, and year and a property
//   called numWheels which should be 4. The Car prototype should inherit
//   all of the methods from the Vehicle prototype
class Car extends Vehicle {
  constructor(make, model, year, numWheels = 4) {
    super(make, model, year);
    this.numWheels = numWheels;
  }
}

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle
//   function should also have a make, model, and year and a
//   property called numWheels which should be 2.
//   The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
class Motorcycle extends Vehicle {
  constructor(make, model, year, numWheels = 2) {
    super(make, model, year);
    this.numWheels = numWheels;
  }
}
