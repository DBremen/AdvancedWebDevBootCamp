const fetch = require("node-fetch");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//second argument to fetch can be also options like:
// {
//     method: 'POST',
//     body:JSON.stringify({
//         name: 'blue',
//         login:'dog'
//     });
// }
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    });