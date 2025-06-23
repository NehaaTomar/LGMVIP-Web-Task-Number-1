// Load todos when page loads
document.addEventListener("DOMContentLoaded", function () {
  renderTodos();
});

function getTodos() {
  return JSON.parse(localStorage.getItem("todo")) || [];
}

function saveTodos(todos) {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function renderTodos() {
  const todos = getTodos();
  const ul = document.getElementById("todoList");
  ul.innerHTML = ""; // Clear previous list

  todos.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="todoItem">${item}</span>
                    <a href="#" class="deleteItems" data-index="${index}"> x</a>`;
    ul.appendChild(li);
  });

  // Delete handlers
  document.querySelectorAll(".deleteItems").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const index = this.getAttribute("data-index");
      const todos = getTodos();
      todos.splice(index, 1);
      saveTodos(todos);
      renderTodos();
    });
  });
}

function addTodo() {
  const input = document.getElementById("myInput");
  const newItem = input.value.trim();

  if (newItem) {
    const todos = getTodos();
    todos.push(newItem);
    saveTodos(todos);
    input.value = "";
    renderTodos();
  } else {
    alert("Please enter a task!");
  }
}
