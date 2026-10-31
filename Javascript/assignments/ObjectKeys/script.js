// RICR Student Record Inspector

const student = {
  name: "Hemangi",
  age: 19,
  city: "Indore",
  course: "MERN Stack",
};

// Using Object.keys()
const studentKeys = Object.keys(student);

console.log("Student Property Names:", studentKeys);
console.log("First Key:", studentKeys[0]);
console.log("Second Key:", studentKeys[1]);
console.log("Total Keys:", studentKeys.length);

// Using Object.values()
const studentValues = Object.values(student);

console.log("Student Details:", studentValues);
console.log("First Value:", studentValues[0]);
console.log("Total Values:", studentValues.length);

// Using Object.entries()
const studentEntries = Object.entries(student);

console.log("Student Key-Value Pairs:", studentEntries);

for (const [key, value] of studentEntries) {
  console.log(key + ": " + value);
}

// Adding another student record
const student2 = {
  name: "Aayushi",
  age: 16,
  city: "Indore",
  course: "Full Stack Development",
};

console.log("Second Student Record:");

console.log("Property Names:", Object.keys(student2));
console.log("Property Values:", Object.values(student2));

for (const [key, value] of Object.entries(student2)) {
  console.log(key + ": " + value);
}

// RICR Course Fee Analyzer
const courseFees = {
  "Web Development": 25000,
  "MERN Stack": 35000,
  "Python Programming": 20000,
  "Java Programming": 30000,
};

// Using Object.keys()
const courseNames = Object.keys(courseFees);

console.log("Course Names:", courseNames);

// Using Object.values()
const fees = Object.values(courseFees);

console.log("Course Fees:", fees);
console.log("First Fee:", fees[0]);
console.log("Total Fee Values:", fees.length);

// Calculating total fees using reduce()
const totalFees = fees.reduce(function (total, fee) {
  return total + fee;
}, 0);

console.log("Total Course Fees:", totalFees);

// Calculating average course fee
const averageFee = totalFees / fees.length;

console.log("Average Course Fee:", averageFee);

// Using Object.entries()
console.log("Course Fee Details:");

for (const [course, fee] of Object.entries(courseFees)) {
  console.log(course + ": Rs. " + fee);
}
// Final Summary
console.log("Final Course Fee Summary");
console.log("Course Names:", courseNames);
console.log("Individual Fees:", fees);
console.log("Total Fees: Rs. " + totalFees);
console.log("Average Fee: Rs. " + averageFee);
