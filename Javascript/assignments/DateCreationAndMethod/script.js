// Assignment 1: RICR Student Admission Date Manager

function showAdmissionDates() {
  // Creates a Date object with the current date and time
  let currentDate = new Date();

  // Month index starts from 0 (January = 0, November = 10)
  let admissionDate = new Date(2026, 10, 15);

  // Creates a date using a date-time string
  let examDate = new Date("2026-12-10T14:30:00");

  // Timestamp 0 represents January 1, 1970 (UTC)
  let timestamp = new Date(0);

  // Date.now() returns the current timestamp in milliseconds
  let currentTimestamp = Date.now();

  // Creates a copy of the admission date
  let copiedDate = new Date(admissionDate);

  // Adds 7 days to the copied date
  copiedDate.setDate(copiedDate.getDate() + 7);

  console.log("Current Date:", currentDate);
  console.log("Admission Date:", admissionDate);
  console.log("Exam Date:", examDate);
  console.log("Exam Hour:", examDate.getHours());
  console.log("Timestamp 0:", timestamp.toISOString());
  console.log("Current Timestamp:", currentTimestamp);

  console.log("Admission Year:", admissionDate.getFullYear());
  console.log("Admission Month:", admissionDate.getMonth() + 1);
  console.log("Admission Day:", admissionDate.getDate());

  // getDate() returns the day of the month.
  // getDay() returns the weekday index (0 = Sunday, 6 = Saturday).
  console.log("Weekday:", admissionDate.getDay());

  console.log("Admission Hours:", admissionDate.getHours());
  console.log("Admission Timestamp:", admissionDate.getTime());

  // UTC getter methods
  console.log("UTC Year:", admissionDate.getUTCFullYear());
  console.log("UTC Hours:", admissionDate.getUTCHours());

  // Original date remains unchanged after modifying its copy
  console.log("Original Admission Date:", admissionDate);
  console.log("Copied Admission Date:", copiedDate);

  document.getElementById("admissionResult").innerHTML =
    "Current Date: " +
    currentDate.toLocaleString("en-IN") +
    "<br>" +
    "Admission Date: " +
    admissionDate.toDateString() +
    "<br>" +
    "Exam Date: " +
    examDate.toDateString() +
    "<br>" +
    "Exam Hour: " +
    examDate.getHours() +
    "<br>" +
    "Timestamp 0: " +
    timestamp.toISOString() +
    "<br>" +
    "Current Timestamp: " +
    currentTimestamp +
    "<br>" +
    "Admission Year: " +
    admissionDate.getFullYear() +
    "<br>" +
    "Admission Month: " +
    (admissionDate.getMonth() + 1) +
    "<br>" +
    "Admission Day: " +
    admissionDate.getDate() +
    "<br>" +
    "Weekday Index: " +
    admissionDate.getDay() +
    "<br>" +
    "Admission Hours: " +
    admissionDate.getHours() +
    "<br>" +
    "Admission Timestamp: " +
    admissionDate.getTime() +
    "<br>" +
    "UTC Year: " +
    admissionDate.getUTCFullYear() +
    "<br>" +
    "UTC Hours: " +
    admissionDate.getUTCHours() +
    "<br>" +
    "Original Date: " +
    admissionDate.toDateString() +
    "<br>" +
    "Copied Date: " +
    copiedDate.toDateString();
}

// Assignment 2: RICR Assignment Deadline Manager

function manageDeadline() {
  // Creates a fixed assignment deadline
  let dueDate = new Date(2026, 10, 15, 10, 30, 45);

  console.log("Original Deadline:", dueDate);

  // Moves the deadline forward by 7 days
  dueDate.setDate(dueDate.getDate() + 7);

  // Changes the month and year
  dueDate.setMonth(11);
  dueDate.setFullYear(2027);

  // Changes the deadline time
  dueDate.setHours(14);
  dueDate.setMinutes(45);
  dueDate.setSeconds(30);

  console.log("Updated Deadline:", dueDate);

  // Creates another date and moves it backward by 7 days
  let previousDate = new Date(2026, 10, 15);

  previousDate.setDate(previousDate.getDate() - 7);

  console.log("Previous Date:", previousDate);

  // Displays dates in different formats
  console.log("Date String:", dueDate.toDateString());
  console.log("ISO Date:", dueDate.toISOString());
  console.log("Indian Date:", dueDate.toLocaleDateString("en-IN"));

  // Converts a standardized date string into milliseconds
  let parsedDate = Date.parse("2026-12-25");

  console.log("Parsed Timestamp:", parsedDate);

  // Creates one valid and one invalid Date object
  let validDate = new Date("2026-12-25");
  let invalidDate = new Date("invalid date");

  // Checks whether the dates are valid
  console.log("Valid Date:", !Number.isNaN(validDate.getTime()));
  console.log("Invalid Date:", Number.isNaN(invalidDate.getTime()));

  // Checks whether a value is a valid Date object
  function isValidDate(value) {
    return value instanceof Date && !Number.isNaN(value.getTime());
  }

  console.log("Check Valid Date:", isValidDate(validDate));
  console.log("Check Invalid Date:", isValidDate(invalidDate));
  document.getElementById("deadlineResult").innerHTML =
    "Original Deadline: 15 November 2026<br>" +
    "Updated Deadline: " +
    dueDate.toDateString() +
    "<br>" +
    "ISO Date: " +
    dueDate.toISOString() +
    "<br>" +
    "Indian Date: " +
    dueDate.toLocaleDateString("en-IN") +
    "<br>" +
    "Updated Time: " +
    dueDate.toLocaleTimeString("en-IN") +
    "<br>" +
    "Previous Date: " +
    previousDate.toDateString() +
    "<br>" +
    "Parsed Timestamp: " +
    parsedDate +
    "<br>" +
    "Valid Date: " +
    isValidDate(validDate) +
    "<br>" +
    "Invalid Date: " +
    isValidDate(invalidDate);
}
