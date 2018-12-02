var btn = document.querySelector("#btn");
var span = document.querySelector("#price");
var xhr = new XMLHttpRequest();
var currency = "EUR";

function getNewPrice() {
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      var price = data.bpi[currency].rate;
      var symbol = data.bpi[currency].symbol;
      var updated = data.time.updated;
      span.innerHTML = price + " " + symbol + " Updated: " + updated;
    }
  };

  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  xhr.send();
}
btn.addEventListener("click", getNewPrice);
getNewPrice();
