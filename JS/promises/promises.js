//nested callbacks
// var counter = 0;
// setTimeout(() => {
//     counter++;
//     console.log('Counter:', counter);
//     setTimeout(() => {
//         counter++;
//         console.log('Counter:', counter);
//         setTimeout(() => {
//             counter++;
//             console.log('Counter:', counter);
//         }, 3000);
//     }, 2000);
// }, 1000);

//chaining promises
// var promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         randInt = Math.floor(Math.random() * 10);
//         resolve(randInt);
//     }, 500);
// });

// promise.then(function (data) {
//     console.log('First promise:', data);
//     //return another promise
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve(Math.floor(Math.random() * 10));
//         }, 3000);
//     });
// }).then(function (data) {
//     console.log('Second promise:', data);
// });

//refactor above using promise chain
var counter = 0;

function incCounter() {
    counter++;
    console.log('Counter:', counter);
}

function runLater(callback, timeout) {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback());
        }, timeout);
    });
    return p;
}

runLater(incCounter, 1000)
    .then(function () {
        return runLater(incCounter, 2000);
    })
    .then(function () {
        return runLater(incCounter, 3000);
    });


// var promise = new Promise((resolve, reject) => {
//     resolve(5);
// });

// promise.then(function (data) {
//     return data * 2;
// }).then(function (data) {
//     return data + 20;
// }).then(function (data) {
//     console.log(data);
// });