//https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
var introduction = ["Hello", "I", "am", "Sarah"];
var [greeting, pronoun] = introduction;

console.log(greeting); //"Hello"
console.log(pronoun); //"I"

var [greeting, pronoun] = ["Hello", "I", "am", "Sarah"];

console.log(greeting); //"Hello"
console.log(pronoun); //"I"

/*
What if we want to get the first and last item on our array instead of the first 
and second item and we want to assign only two variables? This can also be done. 
*/

var [greeting, , , name] = ["Hello", "I", "am", "Sarah"];

console.log(greeting); //"Hello"
console.log(name); //"Sarah"

var [, pronoun, , name] = ["Hello", "I", "am", "Sarah"];

console.log(pronoun); //"I"
console.log(name); //"Sarah"

/*
What if we want to assign some of the array to variables and 
the rest of the items on an array to a particular variable? We'll do this.
*/
var [greeting, ...intro] = ["Hello", "I", "am", "Sarah"];

console.log(greeting); //"Hello"
console.log(intro); //["I", "am", "Sarah"]

/*
Default values can be assigned to the variables just in case the 
value extracted from the array is undefined.
*/
var [greeting = "hi", name = "Sarah"] = ["hello"];

console.log(greeting); //"Hello"
console.log(name); //"Sarah"

/*
Swapping Values using Destructuring Assignment
One more thing. We can use destructuring assignment to swap the values of variables.
*/
var a = 3;
var b = 6;

[a, b] = [b, a];

console.log(a); //6
console.log(b); //3
