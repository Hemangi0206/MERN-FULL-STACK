let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let totalTasks = document.getElementById("totalTasks");
let completedTasks = document.getElementById("completedTasks");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = task.name;
    if (task.completed) {
      span.classList.add("completed");
    }
    span.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      displayTasks();
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks();
      displayTasks();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
  totalTasks.innerText = tasks.length;
  completedTasks.innerText = tasks.filter(function (task) {
    return task.completed;
  }).length;
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
addBtn.addEventListener("click", function () {
  let taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Please enter a task");
    return;
  }
  let newTask = {
    name: taskName,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
  displayTasks();
  taskInput.value = "";
});
displayTasks();
