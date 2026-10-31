// Assignment 1: RICR Student Registration Date Viewer

function showDates() {
  // Creates a Date object with the current date and time
  let today = new Date();

  // Creates a Date object using a date string
  let birthday = new Date("2005-08-15");

  // Creates a Date object using year, month and day
  // Month starts from 0, so 10 represents November
  let eventDate = new Date(2026, 10, 15);

  // Timestamp 0 represents January 1, 1970 (UTC)
  let timestamp = new Date(0);

  console.log("Current Date and Time:", today);
  console.log("Birthday:", birthday);
  console.log("Institute Event Date:", eventDate);
  console.log("Timestamp 0:", timestamp.toISOString());

  // Getting date information from birthday
  console.log("Year:", birthday.getFullYear());

  // getMonth() returns values from 0 to 11, so add 1
  console.log("Month:", birthday.getMonth() + 1);

  console.log("Day of Month:", birthday.getDate());

  // getDay() returns weekday index (0 = Sunday, 6 = Saturday)
  console.log("Day of Week:", birthday.getDay());

  // Displays date in readable formats
  console.log("Date String:", birthday.toDateString());

  console.log("Indian Date Format:", birthday.toLocaleDateString("en-IN"));

  // Displays the Date() and new Date() difference
  console.log("Date() returns:", Date());

  document.getElementById("dateResult").innerHTML =
    "Current Date: " +
    today.toLocaleString("en-IN") +
    "<br>" +
    "Birthday: " +
    birthday.toDateString() +
    "<br>" +
    "Institute Event: " +
    eventDate.toDateString() +
    "<br>" +
    "Timestamp 0: " +
    timestamp.toISOString() +
    "<br>" +
    "Birthday Year: " +
    birthday.getFullYear() +
    "<br>" +
    "Birthday Month: " +
    (birthday.getMonth() + 1) +
    "<br>" +
    "Day of Month: " +
    birthday.getDate() +
    "<br>" +
    "Day of Week: " +
    birthday.getDay() +
    "<br>" +
    "Indian Date: " +
    birthday.toLocaleDateString("en-IN");
}

// Assignment 2: RICR Assignment Deadline Manager

function manageDeadline() {
  // Creates a fixed assignment deadline
  let deadline = new Date(2026, 10, 15, 10, 30, 45);

  // Displays original deadline information
  console.log("Original Deadline:", deadline);

  console.log("Year:", deadline.getFullYear());
  console.log("Month:", deadline.getMonth() + 1);
  console.log("Date:", deadline.getDate());
  console.log("Hours:", deadline.getHours());
  console.log("Minutes:", deadline.getMinutes());
  console.log("Seconds:", deadline.getSeconds());

  // getDate() gives the day of the month
  console.log("Day of Month:", deadline.getDate());

  // getDay() gives the weekday index (0 to 6)
  console.log("Day of Week:", deadline.getDay());

  // Moves the deadline forward by 7 days
  deadline.setDate(deadline.getDate() + 7);

  // Changes the year
  deadline.setFullYear(2027);

  // Changes the month (11 represents December)
  deadline.setMonth(11);

  // Changes the hours and minutes
  deadline.setHours(14);
  deadline.setMinutes(45);

  console.log("Updated Deadline:", deadline);

  // Displays updated deadline in readable formats
  console.log("Date String:", deadline.toDateString());

  console.log("Local Date:", deadline.toLocaleDateString("en-IN"));

  // Creates another date and moves it backward by one day
  let previousDate = new Date(2026, 10, 15);

  previousDate.setDate(previousDate.getDate() - 1);

  console.log("Previous Date:", previousDate.toDateString());

  // Displays the deadline in UTC format
  console.log("UTC Date:", deadline.toISOString());

  document.getElementById("deadlineResult").innerHTML =
    "Original Deadline: 15 November 2026<br>" +
    "Updated Deadline: " +
    deadline.toDateString() +
    "<br>" +
    "Updated Local Date: " +
    deadline.toLocaleDateString("en-IN") +
    "<br>" +
    "Previous Date: " +
    previousDate.toDateString() +
    "<br>" +
    "Updated Time: " +
    deadline.toLocaleTimeString("en-IN") +
    "<br>" +
    "UTC Date: " +
    deadline.toISOString();
}
