function saveLocal() {
let name = document.getElementById("studentName").value;

if (name == "") {
    alert("Enter student name");
} else {
    localStorage.setItem("student", name);
    showData();
}

}

function saveSession() {
let name = document.getElementById("studentName").value;

if (name == "") {
    alert("Enter student name");
} else {
    sessionStorage.setItem("student", name);
    showData();
}

}

function showData() {
let localName = localStorage.getItem("student");
let sessionName = sessionStorage.getItem("student");

if (localName != null) {
    document.getElementById("localData").innerHTML = localName;
} else {
    document.getElementById("localData").innerHTML = "No data saved";
}

if (sessionName != null) {
    document.getElementById("sessionData").innerHTML = sessionName;
} else {
    document.getElementById("sessionData").innerHTML = "No data saved";
}

}

function removeLocal() {
localStorage.removeItem("student");
showData();
}

function removeSession() {
sessionStorage.removeItem("student");
showData();
}

showData();