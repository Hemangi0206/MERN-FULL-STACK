let form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let course = document.getElementById("course").value;

  console.log("Student Name:", name);
  console.log("Email Address:", email);
  console.log("Course Name:", course);
});
