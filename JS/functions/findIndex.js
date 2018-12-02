// findIndex returns the index of the first element in the Array
// for which the callback returns a truthy value. -1 is returned
// if the callback never returns a truthy value.

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

arr = [1, 2, 3, 4, 5];
result = findIndex(arr, function(number, index, numbers) {
  return number > 3;
});
console.log(result);
