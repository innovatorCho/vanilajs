const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".todo-list");

const TODO_KEY = "todos";
let toDos = [];

saveToDos = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
};

deleteToDo = (event) => {
    event.preventDefault();
    const item = event.target.parentElement;
    item.remove();
};

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
};

function handleToDoForm(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoForm);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null) {
    const todoItems = JSON.parse(savedToDos);
    toDos = todoItems;
    todoItems.forEach(paintToDo);
}


