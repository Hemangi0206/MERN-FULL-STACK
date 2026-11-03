function saveLocal() {
  let name = document.getElementById("userName").value;

  if (name == "") {
    alert("Please enter your name");
  } else {
    localStorage.setItem("userName", name);
    document.getElementById("result").innerHTML = "Data saved in Local Storage";
  }
}

function getLocal() {
  let name = localStorage.getItem("userName");

  if (name == null) {
    document.getElementById("result").innerHTML = "No data found";
  } else {
    document.getElementById("result").innerHTML = "Welcome " + name;
  }
}

function removeLocal() {
  localStorage.removeItem("userName");
  document.getElementById("result").innerHTML = "Local Storage data removed";
}

function saveSession() {
  let name = document.getElementById("userName").value;

  if (name == "") {
    alert("Please enter your name");
  } else {
    sessionStorage.setItem("userName", name);
    document.getElementById("result").innerHTML =
      "Data saved in Session Storage";
  }
}

function getSession() {
  let name = sessionStorage.getItem("userName");

  if (name == null) {
    document.getElementById("result").innerHTML = "No data found";
  } else {
    document.getElementById("result").innerHTML = "Welcome " + name;
  }
}

function removeSession() {
  sessionStorage.removeItem("userName");
  document.getElementById("result").innerHTML = "Session Storage data removed";
}
