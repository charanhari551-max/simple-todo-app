function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  input.value = "";
}
