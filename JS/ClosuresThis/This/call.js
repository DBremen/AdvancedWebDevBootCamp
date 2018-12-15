//explicitly binding the value of this by using call,bind, apply (can also be used by functions)
/*
Name of method  parameters (value for this + parameters)    Immediately invoked?
call            thisArg, a,b,c...                           Yes
apply           thisArg, [a,b,c...]                         Yes
bind            thisArg, a,b,c                              No
*/
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



//use call to set the this to person3 a,b,c would be used to passed arguments to the function called
console.log(person3.dog.sayHello.call(person3));
console.log(person3.dog.determineContext.call(person3));
//using call to avoid duplication of code
var colt = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
};
var elie = {
    firstName: "Elie",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
};
console.log(colt.sayHi());
console.log(elie.sayHi());
//shorter (considering sayHi would be more complex)
var elie = {
    firstName: "Elie",
    sayHi: function () {
        return colt.sayHi.call(elie);
    }
};
console.log(elie.sayHi());
//or refactor
function sayHi() {
    return 'Hi ' + this.firstName;
}
var colt = {
    firstName: 'Colt',
    sayHi: function () {
        return sayHi.call(this);
    }
};
var elie = {
    firstName: 'Elie',
    sayHi: function () {
        return sayHi.call(this);
    }
};

console.log(colt.sayHi());
console.log(elie.sayHi());


//select all the divs on a website
var divs = document.getElementsByTagName('div');
//find all divs that have the text 'hello'
//filter cannot be used since divs is not an array but an array like method
//turn divs into an array by using slice
//and replacing this (which would refer to the array it is being called against) by divs
var divsArray = [].slice.call(divs);
//now filter can be used
divsArray.filter(function (div) {
    return div.innerText === 'hello';
})