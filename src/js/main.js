import { Todos } from "./todos";

let toDos = [];
toDos.push(new Todos("Handla matvaror", false));
toDos.push(new Todos("Karva Pumpor", false));
toDos.push(new Todos("Byta Sängkläder", false));
toDos.push(new Todos("Dammsuga", true));

const mainTodoUl = document.getElementById("todoUl");
const clickedTodoUl = document.getElementById("clickedTodoUl");

function render() {
  mainTodoUl.innerHTML = "";
  clickedTodoUl.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].completed) {
      addToCompletedUl(toDos[i], clickedTodoUl);
    } else {
      stayAttodoUl(toDos[i], mainTodoUl);
    }
  }
}

function addToCompletedUl(todos, clickedTodoUl) {
  let newTodoLi = document.createElement("li");
  newTodoLi.classList.add("beenClickedOn");
  clickedTodoUl.appendChild(newTodoLi);
  newTodoLi.innerHTML = todos.what;
  newTodoLi.addEventListener("click", () => {
    todos.completed = false;
    render();
  });
}

function stayAttodoUl(todos, mainTodoUl) {
  let newTodoLi = document.createElement("li");
  mainTodoUl.appendChild(newTodoLi);
  newTodoLi.innerHTML = todos.what;
  newTodoLi.addEventListener("click", () => {
    todos.completed = true;
    render();
  });
}

render();
