// console.log(
//     // returned array is always the same size as the mapped array
//     [1, 2, 3].map(function (val, i, arr) {
//         return val * 2;
//     })
// );

function tripleValues(arr) {
    //needs two returns one to return the results of map and one to return the results of the callback
    return arr.map(function (val) {
        return val * 3;
    });
}

// console.log(tripleValues([1, 2, 3]));

//exercise
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values 
in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}
// console.log(doubleValues([1, 2, 3]));

/*
Write a function called valTimesIndex which accepts an array and returns a new array 
each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    return arr.map(function (val, i) {
        return val * i;
    });
}
// console.log(valTimesIndex([1, 2, 3]));

/*
Write a function called extractKey which accepts an array of objects and some key and returns 
a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    });
}
// console.log(extractKey([{
//     name: 'Elie'
// }, {
//     name: 'Tim'
// }, {
//     name: 'Matt'
// }, {
//     name: 'Colt'
// }], 'name'));
/*
Write a function called extractFullName which accepts an array of objects and returns a 
new array with the value of the key with a name of "first" and the value of a key with the name of  
"last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + ' ' + val.last;
    });
}
// console.log(extractFullName([{
//     first: 'Elie',
//     last: "Schoppik"
// }, {
//     first: 'Tim',
//     last: "Garcia"
// }, {
//     first: 'Matt',
//     last: "Lane"
// }, {
//     first: 'Colt',
//     last: "Steele"
// }]));

const esprima = require('esprima');
const fs = require('fs');
const program = fs.readFileSync(__filename, 'utf8');
const parsed = esprima.parseScript(program);
for (let fn of parsed.body) {
    if (fn.type.endsWith('FunctionDeclaration')) {
        module.exports[fn.id.name] = eval(fn.id.name);
    }
}