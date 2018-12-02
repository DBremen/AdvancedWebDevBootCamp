var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
        console.log(XHR.responseText);
    } else {
        console.log('There was an error!');
    }
};
XHR.open('GET', 'https://api.github.com/zen');
XHR.send();