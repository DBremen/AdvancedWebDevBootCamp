function countDown(seconds) {
    var id = setInterval(function cb() {
        if (--seconds === 0) {
            clearInterval(id);
            console.log('Ring Ring Ring!!!')
        } else {
            console.log('Timer:', seconds);
        }
    }, 1000);
}

countDown(3);