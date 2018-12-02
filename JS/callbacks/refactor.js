// function sendMessageConsole(message) {
//   console.log(message);
// }

// function sendMessageAlert(message) {
//   console.log("Alert: " + message);
// }

// function sendMessageConfirm(message) {
//   console.log("Confirm: " + message);
// }

// sendMessageAlert("Lot's of duplication");

function sendMessage(prefix = "", message, callback) {
  callback(prefix + " " + message);
}

sendMessage("Alert:", "This is better", console.log);
