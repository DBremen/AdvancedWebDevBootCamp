var person = {
  firstName: "Dirk",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === person;
  }
};
console.log(person.sayHi());
console.log(person.determineContext());

//a keyword this is defined when a function is run
var person2 = {
  firstName: "Dirk",
  determineContext: this
};

console.log(person2.this);

//inside nested functions this refers to the closed object
var person3 = {
  firstName: "Joshua",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  dog: {
    sayHello: function () {
      return "Hello " + this.firstName;
    },
    determineContext: function () {
      return this === person3;
    }
  }
};
console.log(person3.dog.sayHello());
console.log(person3.dog.determineContext());