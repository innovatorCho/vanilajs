const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".todl-list");



function handleToDoForm(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo);
}

toDoForm.addEventListener("submit", handleToDoForm);