//assignment: RICR Student Text Formatter

const studentName = "  rAHUL shARma ";

console.log(studentName.trim()); //trim() removes the whitespace from both the ends
console.log(studentName.toUpperCase()); //toUpperCase() converts the whole text to uppercase
console.log(studentName.toLowerCase()); //toLowerCase() converts the whole text to lowercase

const courseDescription =
  "JavaScript is used to make websites interactive. Javascript";

console.log(courseDescription.charAt(5)); //charAt() returns the char value at index 5
console.log(courseDescription.at(-1)); //at() returns the value at index -1(from back)
console.log(courseDescription.slice(4, 10)); //slice() Extracts characters from index 4 to 9
console.log(courseDescription.substring(10, 4)); //substring() Extracts characters between index 4 and 10
console.log(courseDescription.indexOf("used")); //indexof() return  first index of used
console.log(courseDescription.lastIndexOf("Javascript")); //lastIndex() Finds the last index of "Javascript"
console.log(courseDescription.includes("Javascript")); //include() Checks if text contains "Javascript"
console.log(courseDescription.startsWith("JavaScript")); //startWith() Checks if text starts with "JavaScript"
console.log(courseDescription.endsWith("Javascript")); //endsWith() Checks if text ends with "Javascript"

//Assignment:RICR Course Description Processor
const courseMessage = "I am learning HTML, and I use HTML to create web pages.";

console.log(courseMessage.replace("HTML,Javascript")); // replace() Replaces the first occurrence of HTML
console.log(courseMessage.replaceAll("HTML,Javascript")); //  replaceAll() Replaces all occurrences of HTML
console.log(courseMessage.toUpperCase()); // toUpperCase()Converts the complete text to uppercase
console.log(courseMessage.toLowerCase()); // toLowerCase() Converts the complete text to lowercase

const greetings = "GOD BLESS YOU";
const studentName1 = "Hemangi";
console.log(greetings.concat(" ", studentName1)); //joins two strings with a space

const star = "*";
console.log(star.repeat(5)); // Repeats the star 5 times

const str1 = "HTML , JAVASCRIPT , CSS";
console.log(str1.split()); //split() convert it into an array.

const str2 = "Javascript";
console.log(str2.split("")); //split(" ")  use to separate it into an array of words.

const str3 = " hemangi surywanshi ";
console.log(str3); //to return the string
console.log(str3.trimStart()); //remove whitespace from start
console.log(str3.trimEnd()); //remove whitespace from end
