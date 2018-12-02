//not using forEach
var arr = [1, 2, 3, 4, 5];
function double(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);

function myForEach(arr, outputCB) {
  for (var i = 0; i < arr.length; i++) {
    outputCB(arr[i], i, arr);
  }
}

myForEach(arr, function(element, i, arr) {
  console.log(element * 2);
});

arr = ["this", "is", "a", "test"];
var result = "";
myForEach(arr, function(element, i, arr) {
  if (arr.length - 1 !== i) {
    result += element + " ";
  } else {
    result += element + ".";
    console.log(result);
  }
});
