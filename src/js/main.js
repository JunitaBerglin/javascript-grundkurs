import { Todos } from "./todos";

const mainTodoUl = document.getElementById("todoUl");

let toDos = [];
toDos.push(new Todos("Handla matvaror", false));
toDos.push(new Todos("Karva Pumpor", false));
toDos.push(new Todos("Byta Sängkläder", false));
toDos.push(new Todos("Dammsuga", true));

function printTodoList() {
  mainTodoUl.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);

    let newTodoLi = document.createElement("li");
    newTodoLi.innerHTML = toDos[i].what;

    newTodoLi.addEventListener("click", () => {
      toDos[i].completed = true;
      printTodoList();
    });

    if (toDos[i].completed) {
      newTodoLi.classList.add("beenClickedOn");
    }

    mainTodoUl.appendChild(newTodoLi);
  }
}
printTodoList();
