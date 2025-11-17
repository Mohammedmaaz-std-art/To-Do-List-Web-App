// Select HTML elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// When user clicks the Add button, run addTask function
addBtn.addEventListener("click", addTask);

// When user presses ENTER inside the input box
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  // Step 1: Get the text from input box
  const taskText = input.value.trim();
  

  // If input is empty, stop
  if (taskText === "") {
    return;
  }

  // Step 2: Create a new <li> for the task
  const li = document.createElement("li");

  // Step 3: Create the task text span
  const span = document.createElement("span");
  span.textContent = taskText;   // safer than innerHTML

  // Step 4: Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Step 5: Add toggle complete on clicking the li
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Step 6: Delete task on clicking delete button
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();   // stop li click
    li.remove();
  });

  // Step 7: Put span and deleteBtn inside li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Step 8: Add li to the list
  taskList.appendChild(li);

  // Step 9: Clear input box
  input.value = "";
}
