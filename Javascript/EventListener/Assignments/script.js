document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Link clicked");
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  document.getElementById("msg").innerHTML = "Welcome " + name;
});

document.getElementById("students").addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    document.getElementById("studentMsg").innerHTML = e.target.innerHTML;
  }
});

document.getElementById("add").addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = "New Task";
  document.getElementById("tasks").appendChild(li);
});

document.getElementById("tasks").addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    document.getElementById("taskMsg").innerHTML = e.target.innerHTML;
  }
});

document.getElementById("grand").addEventListener(
  "click",
  function () {
    console.log("Grandparent");
  },
  true,
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  true,
);

document.getElementById("child").addEventListener("click", function () {
  console.log("Child");
});

document.getElementById("capture").addEventListener("click", function () {
  document.getElementById("order").innerHTML = "Grandparent, Parent, Child";
});

document.getElementById("bubble").addEventListener("click", function () {
  document.getElementById("order").innerHTML = "Child, Parent, Grandparent";
});

document.getElementById("box3").addEventListener("click", function () {
  console.log("Child");
});

document.getElementById("box2").addEventListener("click", function () {
  console.log("Parent");
});

document.getElementById("box1").addEventListener("click", function () {
  console.log("Grandparent");
});

document.getElementById("inner").addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Button clicked");
});

document.getElementById("outer").addEventListener("click", function () {
  console.log("Parent clicked");
});

function showNotification() {
  document.getElementById("notification").innerHTML = "New notification";
}

document.getElementById("show").addEventListener("click", showNotification);

document.getElementById("stop").addEventListener("click", function () {
  document
    .getElementById("show")
    .removeEventListener("click", showNotification);
});

function showCourse() {
  document.getElementById("courseMsg").innerHTML = "Welcome to the course";
}

document.getElementById("course").addEventListener("click", showCourse);

document.getElementById("disable").addEventListener("click", function () {
  document.getElementById("course").removeEventListener("click", showCourse);
});

document.getElementById("profile").addEventListener("click", function () {
  document.getElementById("dashboard").innerHTML = "Student Profile";
});

document.getElementById("details").addEventListener("click", function () {
  document.getElementById("dashboard").innerHTML = "Course Details";
});

document.getElementById("attendance").addEventListener("click", function () {
  document.getElementById("dashboard").innerHTML = "Attendance Details";
});

document.getElementById("offer").addEventListener(
  "click",
  function () {
    document.getElementById("offerMsg").innerHTML = "Offer Claimed";
  },
  { once: true },
);

document.getElementById("complete").addEventListener("click", function () {
  document.getElementById("doneMsg").innerHTML = "Task Completed";
});

document.getElementById("complete").addEventListener("click", function () {
  document.getElementById("doneMsg").innerHTML += " Successfully";
});
