// Assignment 1: RICR Random Number Generator

function generateNumber() {
  // Generates a random decimal between 0 and 1
  let num1 = Math.random();

  // Multiplying by 100 changes the range from 0-1 to 0-100
  let num2 = Math.random() * 100;

  // Math.floor() removes the decimal part and gives an integer between 0 and 9
  let num3 = Math.floor(Math.random() * 10);

  // Generates a random integer between 1 and 10 (both included)
  let num4 = Math.floor(Math.random() * 10) + 1;

  document.getElementById("numberResult").innerHTML =
    "Random Decimal (0 to 1): " +
    num1 +
    "<br>" +
    "Random Decimal (0 to 100): " +
    num2 +
    "<br>" +
    "Random Integer (0 to 9): " +
    num3 +
    "<br>" +
    "Random Integer (1 to 10): " +
    num4;
}
// Assignment 2: RICR Random Course Activity Selector

function generateActivity() {
  // Both minimum and maximum values are included (5 to 15)
  let num1 = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

  // Minimum is included but maximum is excluded (5 to 14)
  let num2 = Math.floor(Math.random() * (15 - 5)) + 5;

  // Generates a random decimal between 10 (included) and 20 (excluded)
  let num3 = Math.random() * (20 - 10) + 10;

  document.getElementById("activityResult").innerHTML =
    "Random Integer (5 to 15 inclusive): " +
    num1 +
    "<br>" +
    "Random Integer (5 to 15 exclusive): " +
    num2 +
    "<br>" +
    "Random Decimal (10 to 20): " +
    num3;
}
