//Assignment:RICR Student Score & Fee Formatter
const student_score = 20;
const course_fee = 200000.8956;
const attendance_percentage = 90;

// toString() converts a number into a string.
console.log(student_score.toString());

// typeof displays the data type of the converted value.
console.log(typeof student_score.toString());

// toLocaleString() formats a number according to Indian number formatting.
console.log(course_fee.toLocaleString("en-IN"));

// toLocaleString() with currency options displays the amount in Indian Rupees.
console.log(
  course_fee.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  }),
);
// toFixed(2) displays the number with exactly two digits after the decimal point.
console.log(attendance_percentage.toFixed(2));

// toPrecision(2) displays the number using two significant digits.
const value1 = 20.356;
console.log(value1.toPrecision(2));

// toExponential() displays a number in exponential notation.
console.log(value1.toExponential());

// Assignment 2: RICR Student Data Validation & Numeric Text Processing

let score = 85;
let decimalScore = 85.75;
let numericString = "85";
let nanValue = NaN;
let infinityValue = Infinity;

// Number.isInteger() checks whether a value is an integer number.
console.log(Number.isInteger(score));

// Number.isInteger() returns false for decimal numbers.
console.log(Number.isInteger(decimalScore));

// "85" is a string, not a number, so Number.isInteger() returns false.
// It does not automatically convert strings into numbers.
console.log(Number.isInteger(numericString));

// Number.isNaN() checks whether a value is NaN.
console.log(Number.isNaN(nanValue));

// Infinity is not NaN, so the result is false.
console.log(Number.isNaN(infinityValue));

// Number.isFinite() checks whether a value is a finite number.
// Infinity is not finite, so the result is false.
console.log(Number.isFinite(infinityValue));

// A normal number is finite, so the result is true.
console.log(Number.isFinite(score));

// Number.isSafeInteger() checks whether an integer is within
// JavaScript's safe integer range.
console.log(Number.isSafeInteger(score));

// Infinity is not an integer, so the result is false.
console.log(Number.isSafeInteger(infinityValue));

// NaN is not an integer, so the result is false.
console.log(Number.isSafeInteger(nanValue));
// Number.MAX_SAFE_INTEGER returns the largest safe integer in JavaScript.
console.log(Number.MAX_SAFE_INTEGER);

// Numeric Text Processing

const n1 = "85.75";
const n2 = "120px";
const n3 = "hello";

// Number.parseInt() extracts the integer part from the beginning of a string.
console.log(Number.parseInt(n1));
// Number.parseInt() reads the numeric prefix and stops at the first
// character that cannot be part of an integer.
console.log(Number.parseInt(n2));

// Number.parseFloat() returns NaN because the string starts with text
// instead of a valid numeric value.
console.log(Number.parseFloat(n3));

// Number.parseFloat() reads the decimal number from the beginning
// of the string.
console.log(Number.parseFloat(n1));

// Parsing a numeric prefix does not guarantee that the entire input
// is valid.
console.log(Number("120px"));
console.log(Number.isFinite(Number("120px")));

// Number() converts a complete numeric string into a number.
console.log(Number("85"));

// After conversion, Number.isInteger() can check whether it is an integer.
console.log(Number.isInteger(Number("85")));
