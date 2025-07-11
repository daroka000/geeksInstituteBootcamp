const tasks = [];
let currentId = 0;
const form= document.getElementById("todo-form");
const input= document.getElementById("todo-input");
const listTasks = document.querySelector(".listTasks");
const clearBtn  = document.getElementById("clear-all");
function addTask() {
  const text = input.value.trim();
  if (!text) return; 

  const task = { task_id: currentId++, text, done: false };
  tasks.push(task);
  renderTask(task);

  // reset the input
  input.value = "";
  input.focus();
}
function renderTask(task) {
  // container
  const line = document.createElement("div");
  line.className = "task";
  line.dataset.taskId = task.task_id;

  // delete  button
  const delBtn = document.createElement("button");
  delBtn.className = "delete";
  delBtn.innerHTML = '<i class="fas fa-times"></i>';
  delBtn.addEventListener("click", () => removeTask(task.task_id));

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () =>
    toggleDone(task.task_id, checkbox)
  );

  // label
  const label = document.createElement("label");
  label.textContent = task.text;

  // assembly
  line.append(delBtn, checkbox, label);
  listTasks.appendChild(line);
}

// Toggle done/undone
function toggleDone(id, checkbox) {
  const task = tasks.find((t) => t.task_id === id);
  if (!task) return;

  task.done = checkbox.checked;

  const line = document.querySelector(`[data-task-id="${id}"] label`);
  if (task.done) {
    line.style.textDecoration = "line-through";
    line.style.color = "red";
  } else {
    line.style.textDecoration = "none";
    line.style.color = "inherit";
  }
}


// Remove a task
function removeTask(id) {
  // remove from array
  const idx = tasks.findIndex((t) => t.task_id === id);
  if (idx !== -1) tasks.splice(idx, 1);

  // remove from DOM
  const node = document.querySelector(`[data-task-id="${id}"]`);
  node?.remove();
}

// Form submit → add new task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

// Bouton CLEAR : supprime UNIQUEMENT les tâches cochées (done = true)
clearBtn.addEventListener("click", clearCompleted);

function clearCompleted() {
  // on parcourt le tableau à l'envers pour pouvoir supprimer sans bug
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].done) {
      const { task_id } = tasks[i];       
      tasks.splice(i, 1);                 // retire de l'array
      // retire du DOM
      const node = document.querySelector(`[data-task-id="${task_id}"]`);
      node?.remove();
    }
  }
}


  