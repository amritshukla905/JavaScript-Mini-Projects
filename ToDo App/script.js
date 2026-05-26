const ad = document.getElementById("addBtn");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function add(container,text){
  const li = document.createElement("li");
  // it creat an element li
  li.innerHTML = `${text}
  <button class = "delelem">Delete</button>
  `;
  container.appendChild(li);
  //here container is selected by id = todolist  id;
  const del = li.querySelector(".delelem");
  del.addEventListener("click",()=>{
    li.remove();
  });
};
function log(text){
  add(todoList,text);
};
ad.addEventListener("click",()=>{
  const value = input.value;
  log(value);
});
