const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');
const imgAvatar = document.querySelector('#avatar');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');

btn.addEventListener('click', GetNewUser);
GetNewUser();

function GetNewUser() {
    fetch(url)
        .then(function (res) {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        }).then(function (res) {
            imgAvatar.src = res.results[0].picture.medium;
            fullname.innerHTML = res.results[0].name.first + ' ' + res.results[0].name.last;
            username.innerHTML = res.results[0].login.username;
            email.innerHTML = res.results[0].email;
            city.innerHTML = res.results[0].location.city;
        }).catch(function (error) {
            console.log(error);
        });
}