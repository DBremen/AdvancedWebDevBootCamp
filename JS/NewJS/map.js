// like object but keys can be of any type
var firstMap = new Map();
firstMap.set(1, "Elie");
firstMap.set(false, "a boolean");
firstMap.set("nice", "a string");
firstMap.delete("nice");
console.log(firstMap.size); //2

//also arrays and objects
let arrKey = [];
let objKey = {};
console.log(firstMap.set(arrKey, "an array"));
firstMap.set(objKey, "an object");
console.log(firstMap.get(objKey));

for (var [key, value] of firstMap) {
  console.log(key + " = " + value);
}
