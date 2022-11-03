import { Todos } from "./todos"; //imorterar min mall/Class så den kan användas här också

const clickedTodoUl = document.getElementById("clickedTodoUl");

let todoFromLS = localStorage.getItem("clickedToDos"); //listan hämtas ut från Local storage
let doneTodo = JSON.parse(todoFromLS); // listan blir i jason format igen och heter nu doneTodo
console.log(doneTodo);

for (let i = 0; i < doneTodo.length; i++) {
  let li = document.createElement("li");
  console.log(doneTodo[i]);

  li.innerHTML = doneTodo[i]?.what;
  clickedTodoUl.appendChild(li);
}
