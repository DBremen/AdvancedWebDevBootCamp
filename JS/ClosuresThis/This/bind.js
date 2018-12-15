function addNumbers(a, b, c) {
  return this.firstName + " added numbers up to: " + (a + b + c);
}
var elie = {
  firstName: "Elie"
};

var elieCalc = addNumbers.bind(elie, 1, 2, 3);
console.log(elieCalc());

//partial application (do not need to know/provide all the parameters at the point of binding)
var newElieCalc = addNumbers.bind(elie, 1, 2);
console.log(newElieCalc(3));

//using bind with asynchronous functions

var colt = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(function() {
      //since setTimeout is a method on the global object this will not work as intended
      //when being called the context of this is the global object not colt
      console.log("Hi " + this.firstName);
    }, 1000);
  }
};

colt.sayHi();
var colt2 = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(
      function() {
        //set this to the current context (colt2)
        console.log("Hi " + this.firstName);
      }.bind(this),
      1000
    );
  }
};

colt2.sayHi();
