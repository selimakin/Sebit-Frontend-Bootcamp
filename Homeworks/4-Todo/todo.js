const form = document.querySelector(".todoForm");
const inputEl = document.querySelector(".newTodoInput");
const todosEl = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputEl.value) {
    alert("Please fill out the blank");
    return;
  }

  const todo_el = document.createElement("div");
  todo_el.classList.add("todo");

  const todo_content_el = document.createElement("div");
  todo_content_el.classList.add("content");

  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement("input");
  todo_input_el.classList.add("text");
  todo_input_el.type = "text";
  todo_input_el.value = inputEl.value;
  todo_input_el.setAttribute("readonly", "readonly");

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement("div");
  todo_actions_el.classList.add("actions");

  const todo_edit_el = document.createElement("button");
  todo_edit_el.classList.add("edit");
  todo_edit_el.innerHTML = "<ion-icon name='pencil-outline'></ion-icon>";
  todo_edit_el.setAttribute("name", "edit");

  const todo_delete_el = document.createElement("button");
  todo_delete_el.classList.add("delete");
  todo_delete_el.innerHTML = "<ion-icon name='trash-outline'></ion-icon>";

  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);

  todosEl.appendChild(todo_el);

  inputEl.value = "";

  todo_edit_el.addEventListener("click", () => {
    if (todo_edit_el.name == "edit") {
      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
      todo_edit_el.innerHTML = "<ion-icon name='checkbox-outline'></ion-icon>";
      todo_edit_el.setAttribute("name", "check");
    } else {
      todo_input_el.setAttribute("readonly", "readonly");
      todo_edit_el.innerHTML = "<ion-icon name='pencil-outline'></ion-icon>";
      todo_edit_el.setAttribute("name", "edit");
    }
  });

  todo_delete_el.addEventListener("click", () => {
    todosEl.removeChild(todo_el);
  });
});
