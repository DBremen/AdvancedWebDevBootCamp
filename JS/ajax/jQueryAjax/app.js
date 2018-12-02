$('#btn').click(function () {
    $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler"
        })
        .done(function (res) {
            $('#txt').text(res[0]);
        })
        .fail(function () {
            console.log('Error!');
        });
});