/*jshint esversion: 6 */
//object shorthand notation

//shorthand for object properties
var firstName = 'Dirk';
var lastName = 'Bremen';
var instructor = {
    firstName,
    lastName
}
//shorthand for object methods
instructor = {
    sayHello() {
        console.log('Hello folsk');

    }
};
//using the same in constructor
function Person(firstName, lastName) {
    Object.assign(this, {
        firstName,
        lastName,
        printName() {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    });
}

(new Person('Dirk', 'Bremen')).printName();

//or class
class Person2 {
    constructor(firstName, lastName) {
        Object.assign(this, {
            firstName,
            lastName
        });
    }
    printName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

(new Person2('Dirk', 'Bremen')).printName();

//computed property names
//instead of
var propName = 'firstName';
var object = {};
object[propName] = 'test';
console.log(object.firstName);
//we can do this
object = {
    [propName]: 'test'
}
console.log(object.firstName);