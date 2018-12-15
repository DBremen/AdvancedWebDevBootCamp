/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function 
is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/
var tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);
console.log(tripleAndFilter([3, 2, 5]));



/* 2 - Refactor the following code to use ES2015 arrow functions. 
Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/
var doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);
console.log(doubleOddNumbers([1, 2, 3, 4]));


/* 3 - Refactor the following code to use ES2015 arrow functions. 
Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/
var mapFilterAndReduce = arr => arr.map(val => val.firstName)
  .filter(val => val.length < 5)
  .reduce((acc, next) => {
    acc[next] = next.length;
    return next.length;
  }, {});

/* 4 - Write a function called createStudentObj which accepts two parameters, 
firstName and lastName and returns an object with the keys of firstName and 
lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/
var createStudentObj = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName
});
console.log(createStudentObj('Elie', 'Schoppik'));

/* 5 - Given the following code: 


Refactor this code to use arrow functions to make sure that in 
1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }
in the furnction version this refers to the global object and therefore does not work
when an arrow function is used this refers to the parent object's this
*/
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    setTimeout(() => {
      console.log('Hello ' + this.firstName)
    }, 1000)
  }
}
instructor.sayHi();