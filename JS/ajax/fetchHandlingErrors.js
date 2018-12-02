const fetch = require("node-fetch");
var url = "https://api.github.com/users/DBremen";
fetch(url)
    .then(function (res) {
        if (!res.ok) {
            console.log('Error:', req.status);
            throw Error(res.status);
        }
        return res.json();
    }).then(function (res) {
        console.log(res);
    }).catch(function (error) {
        console.log(error);
    });