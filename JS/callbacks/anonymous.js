function greet(name, formatter) {
  console.log("Hello, " + formatter(name));
}

greet("Tim", function(name) {
  return name.toUpperCase();
});

greet("Dirk", function(name) {
  return name + "!!!!";
});
