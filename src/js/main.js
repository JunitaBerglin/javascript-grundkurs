import { Todos } from "./todos";

let toDos = [];
toDos.push(new Todos("Handla matvaror")); //min lista skapas och pushas en o en
toDos.push(new Todos("Karva Pumpor"));
toDos.push(new Todos("Byta Sängkläder"));
toDos.push(new Todos("Dammsuga"));

let clickedTodo = []; // här kommer det fyllas på med objekt som är klickade på.

const todoUl = document.getElementById("todoUl");

for (let i = 0; i < toDos.length; i++) {
  let li = document.createElement("li");

  li.addEventListener("click", () => {
    handleClick(toDos[i]);
  });
  li.innerHTML = toDos[i].what;
  todoUl.appendChild(li);
  // clickedTodo.splice(toDos[i]); ??
}
function handleClick(todo_) {
  console.log("Du klickade på ", todo_); //<--todo_ är bara ett variabelnamn på värdet som kom från 'toDo [i]'
  clickedTodo.push(todo_);

  localStorage.setItem("clickedToDos", JSON.stringify(clickedTodo));
}
/*
let newItem = "";
function newItem() {
  let writeTag = getElementById("addSomeText"); //låt textelementet heta writeTag
  let newTodoObjekt = writeTag.value; // låt värdet i writeTag vara newObjekt (vad nu användaren skriver in)
  let newItemObject = new Todos(newTodoObjekt, false); //låt detta nya objekt bli ett objekt i listan

  innerTagTodo(); //anropar att nästa funktion startar
}
function innerTagTodo() {
  let willAdd = getElementById("addTag"); //låt knappen heta willAdd
  willAdd.addEventListener("click", addNow); //låt knappen lyssna på klick, då händer addNow (nästa funktion)

  function addNow() {
    toDos.push(newItemObject); // låt newTodoObject pushas ut i listan
  }
}

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}*/
