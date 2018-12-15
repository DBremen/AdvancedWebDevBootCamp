// A closure is a function that makes use of variables defined in outer
// functions that have previously returned

function outer() {
  var start = "Closures are";
  return function inner() {
    return start + " " + "awesome.";
  };
}
//invoke inner immediately
//inner has access to the start variable after outer has returned through a closure
console.log(outer()());
var inner = outer();
console.log(inner());

function adder(a) {
  return function sum(b) {
    return a + b;
  };
}
console.log(adder(5)(10));
var fivePlus = adder(5);
console.log(fivePlus(10));

function outerFn() {
  var data = "Something from outerfn";
  var fact = "Remember me";
  return function innerFn() {
    // at this point there is only access to fact but not to data since it is not being
    // used within the inner function. Only those variables that are being used are being
    // "remembered" after outerFn returns
    //debugger;
    return fact;
  };
}
var outer = outerFn();
outer();

//use closures to emulate private variables
function counter() {
  var count = 0;
  return function inner() {
    count++;
    return count;
  };
}
var counter1 = counter();
console.log(counter1());
console.log(counter1());
var counter2 = counter();
//counter will start from 1 again since counter1 maintains its own private "copy" of the count variable
console.log(counter2());

function classroom() {
  // instructors remains private and can be also accessed throug the inner functions
  var instructors = ["Dirk", "Joshua", "Aidan"];
  return {
    getInstructors: function() {
      //only return a copy of instructors to avoid manipulation
      //return instructors;
      return instructors.slice();
    },
    addInstructor: function(instructor) {
      instructors.push(instructor);
      //only return a copy of instructors to avoid manipulation
      //return instructors;
      return instructors.slice();
    }
  };
}
var first = classroom();
console.log(first.getInstructors());
console.log(first.addInstructor("New Guy"));
var second = classroom();
console.log(second.getInstructors());
//gotcha
console.log(first.getInstructors().pop());
//can be avoided be returning a copy of the isntructors array instead using "return instructors.slice()"

/* 
Write a function called specialMultiply which accepts two parameters. 
If the function is passed both parameters, it should return the product of the two. 
If the function is only passed one parameter - it should return a function which can later 
be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a, b) {
  if (a && b) {
    return a * b;
  } else if (a || b) {
    return function(multiplier) {
      return (a || b) * multiplier;
    };
  }
}
console.log(specialMultiply(3)(4));

/* 
Write a function called guessingGame which takes in one parameter amount. 
The function should return another function that takes in a parameter called guess. 
In the outer function, you should create a variable called answer 
which is the result of a random number between 0 and 10 as well as a variable 
called guesses which should be set to 0.

In the inner function, if the guess passed in is the same 
as the random number (defined in the outer function) - 
you should return the string "You got it!". If the guess is too high return 
"Your guess is too high!" and if it is too low, return "Your guess is too low!". 
You should stop the user from guessing if the amount of guesses they have made is 
greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessingGame(amount) {
  var answer = randomIntFromInterval(0, 10);
  var guesses = 0;
  var answered = false;
  return function guessingGame(guess) {
    guesses++;
    if (!answered) {
      if (guess === answer) {
        answered = true;
        return "You got it!";
      } else if (guesses === amount) {
        answered = true;
        return "No more guesses the answer was " + answer;
      } else if (guess < answer) {
        return "Your guess is too low!";
      } else if (guess > answer) {
        return "Your guess is too high!";
      }
    } else {
      return "You are all done playing!";
    }
  };
}

var game = guessingGame(3);
console.log(game(2));
console.log(game(4));
console.log(game(9));
console.log(game(1));
