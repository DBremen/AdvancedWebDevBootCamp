// all values are unique
var s = new Set();
var set2 = new Set([1,2,2,3,4,4,5]);
s.add(10);
s.add(20);
s.add(10);
console.log(s.size);
console.log(set2.has(5));
for (let val of set2){
    console.log(val);
}

