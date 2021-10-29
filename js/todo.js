const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".todo-list");

deleteToDo = (event) => {
    event.preventDefault();
    const item = event.target.parentElement;
    item.remove();
}

paintToDo = (newTodo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);

    button.innerText = " X ";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
}

function handleToDoForm(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoForm);