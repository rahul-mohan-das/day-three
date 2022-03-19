const todoTxt = document.getElementById("todoTxt");
const btn = document.getElementById("btn");
const items = document.getElementById("items");
const ID=0;

const addToDo = () => {
  const li=document.createElement("li");
  li.innerHTML= todoTxt.value + `<button onclick="onButtonClick(this)">Detele</button>`;
  items.appendChild(li);
  //const deleteButtons = document.getElementsByClassName("deleteBtn");
}

const onButtonClick=(button)=>{
  const li = button.parentElement;
  items.removeChild(li);
}

btn.addEventListener("click", addToDo)