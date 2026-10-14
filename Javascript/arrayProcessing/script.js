const number = [10, 20, 30, 40];
const doubleNumber = number.map(function (number) {
  return number * 2;
});
console.log(doubleNumber);

const lis = [10, 20];
const lis1 = lis.map((lis) => lis * 2);
console.log(lis1);


//using map and forEach
/*

const ary=["apple",2.5,99,"himachal","a0"]

console.log("with for Each");
ary.forEach(element => {
    console.log(element);
})
console.log(" with map");
ary.map(element => {
    console.log(element);
})

*/

const ary = ["apple", 2.5, 99, "himachal", "a"];

console.log("with for Each");
var x = ary.forEach((element) => {
  if (typeof element === "number") {
    return element;
  }
});
console.log(" with map");
var x = ary.map((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log("X= ", x);
const ar2 = ["apple", 2.5, 99, "himachal", "a"];
var F = ar2.filter((item) => item !== 99);
console.log("F = ", F);
var Fi = ar2.find((item) => item === 99);
console.log("Fi = ", Fi);
var Fix = ar2.findIndex((item) => item === 99);
console.log("Fix = ", Fix);


//sorting 
const ar3 = [2, 6, 4, 8, 6, 9, 1];
var s = ar3.sort((a,b)=> b-a);// if a-b ascending order and b-a desending order bubble sort
console.log("S = ", s);
