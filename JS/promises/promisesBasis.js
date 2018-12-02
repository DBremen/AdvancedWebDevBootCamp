// var p1 = new Promise((resolve, reject) => {
//     var num = Math.random();
//     if (num < 0.5) {
//         resolve(num);
//     }
//     reject(num);
// });

// p1.then(function (result) {
//     console.log('Promise resolved:', result);
// }).catch(function (error) {
//     console.log('Promised was rejected:', error);
// });

var promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        var randInt = Math.floor(Math.random() * 10);
        resolve(randInt);
    }, 4000);
});

promise.then(function (data) {
    console.log('Resolved:', data);
});