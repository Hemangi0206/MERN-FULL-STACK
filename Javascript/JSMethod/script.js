const str = "Anand Kumar";
console.log(str.charAt(0));
console.log(str.charAt(4));
console.log(str.charAt(9));

const language = "webdevelopment";

console.log(language.at(0));
console.log(language.at(-1));
console.log(language.at(-2));

const text = "Java Script";

console.log(text.slice(0, 4));
console.log(text.slice(4, 10));
console.log(text.slice(4));
console.log(text.slice(-6));

const text1 = "JavaScript";

console.log(text1.substring(0, 4));
console.log(text1.substring(4, 10));
console.log(text1.substring(4));

const text2 = "Learn JavaScript";

console.log(text2.indexOf("Java"));
console.log(text2.indexOf("Script"));
console.log(text2.indexOf("Python"));

const text3 = "hello hello";

console.log(text3.indexOf("hello"));
console.log(text3.indexOf("hello", 1));

const text4 = "hello hello";

console.log(text4.lastIndexOf("hello"));
console.log(text4.lastIndexOf("l"));

const email = "student@example.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));

const filename = "assignment.pdf";

console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));

const message = "HTML is useful. HTML is popular.";
console.log(message.replace("HTML", "JavaScript"));

const message1 = "HTML is useful. HTML is popular.";

console.log(message.replaceAll("HTML", "JavaScript"));

const text5 = "JavaScript Methods";

console.log(text.toUpperCase());

const text6 = "JavaScript Methods";

console.log(text.toLowerCase());

const name = "   Rahul Sharma   ";

console.log(name.trim());

const text7 = "   Hello   ";

console.log(text.trimStart());
console.log(text.trimEnd());

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));

console.log("Hi ".repeat(3));
console.log("*".repeat(5));

//split case
const subjects = "HTML,JavaScript,React";
console.log(subjects.split(","));


const sentence = "JavaScript is useful";
console.log(sentence.split(" "));


const word = "CODE";
console.log(word.split(""));


console.log("HTML CSS JS".split());// the entire string is returned as one element in an array.

//number method
const value = 10;

console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));

const amount = 1234567.89;

console.log(amount.toLocaleString("en-US"));
console.log(amount.toLocaleString("de-DE"));
console.log(amount.toLocaleString("en-IN"));

const amount1 = 1234.5;

console.log(
  amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
);
