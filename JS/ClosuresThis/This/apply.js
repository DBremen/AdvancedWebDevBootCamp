//explicitly binding the value of this by using call,bind, apply (can also be used by functions)
/*
Name of method  parameters (value for this + parameters)    Immediately invoked?
call            thisArg, a,b,c...                           Yes
apply           thisArg, [a,b,c...]                         Yes
bind            thisArg, a,b,c                              No
*/
//same as call only that arguments to function being applied/called is passed as array
function addNumbers(a, b, c) {
    return this.firstName + ' added numbers to: ' + (a + b + c);
}
var colt = {
    firstName: "Colt",
    addNumbers: function () {
        return addNumbers.call(this, 1, 2, 3);
    }
};
var elie = {
    firstName: "Elie",
    addNumbers: function () {
        return addNumbers.apply(this, [1, 2, 3]);
    }
};
console.log(colt.addNumbers());
console.log(elie.addNumbers());

//use apply to spread 
var nums = [1, 4, 2, 6, 4, 7];
console.log(Math.max(nums));
console.log(Math.max.apply(this, nums));
//or using spread operator ES6
console.log(Math.max(...nums));