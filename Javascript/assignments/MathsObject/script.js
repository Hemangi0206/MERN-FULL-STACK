// RICR Student Marks Analyzer

const marks = [78.45, 91.2, 66.74, 88.9, 72.15, 59.6];
const sampleMark = 87.68;

// Math.round() rounds a decimal value to the nearest whole number.
console.log(Math.round(sampleMark));

// Math.floor() removes the decimal part by always rounding downward.
console.log(Math.floor(sampleMark));

// Math.ceil() always rounds a decimal value upward toward the next integer.
console.log(Math.ceil(sampleMark));

// Math.trunc() removes the decimal part without rounding.
console.log(Math.trunc(sampleMark));

// Math.min(...) finds the lowest value in an array of marks.
console.log(Math.min(...marks));

// Math.max(...) finds the highest value in an array of marks.
console.log(Math.max(...marks));

// Math.abs() returns the absolute value, so negative numbers become positive.
const difference = 88.9 - 72.15;
console.log(Math.abs(difference));

// Arithmetic operators are used to calculate simple mark-based results.
const markA = 76.5;
const markB = 82.25;
const markC = 5;

// Addition combines values.
console.log(markA + markB);

// Subtraction finds the difference between values.
console.log(markB - markA);

// Multiplication scales a value by another value.
console.log(markA * markC);

// Division splits a value into equal parts.
console.log(markB / markC);

// Remainder (%) returns the leftover after division.
console.log(markB % markC);

// Math.sign() shows whether a number is positive, negative, or zero.
console.log(Math.sign(25));
console.log(Math.sign(-18));
console.log(Math.sign(0));

// RICR Course Measurement Calculator

const radius = 7;
const base = 6;
const height = 8;

// Math.PI stores the value of pi, used in circle calculations.
console.log(Math.PI);

// Circumference of a circle = 2 * pi * radius.
console.log(2 * Math.PI * radius);

// Math.pow(base, exponent) calculates the base raised to the power.
console.log(Math.pow(radius, 2));

// Math.sqrt() calculates the square root of a positive number.
console.log(Math.sqrt(36));

// Math.sqrt() with a negative input returns NaN because no real square root exists.
console.log(Math.sqrt(-9));

// Math.cbrt() calculates the cube root of a number.
console.log(Math.cbrt(27));

// Math.hypot() calculates the hypotenuse using the two perpendicular sides of a right triangle.
console.log(Math.hypot(base, height));

// The exponentiation operator (**) raises a number to a power.
console.log(radius ** 2);

// Math.sign() checks whether the numbers are positive, negative, or zero.
console.log(Math.sign(12));
console.log(Math.sign(-9));
console.log(Math.sign(0));
