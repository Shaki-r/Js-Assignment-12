function activateTodoApp() {
  const searchIcon = document.getElementById('search-trigger');
  const todoBox = document.getElementById('todo-box');
  const todoInput = document.getElementById('todo-input');
  const appTitle = document.getElementById('app-title');

  searchIcon.classList.add('fish-dive');

  setTimeout(() => {
    todoBox.classList.add('active');
    todoInput.disabled = false;
    todoInput.focus();
    appTitle.classList.add('show-heading');
  }, 300);
}



// --------------functions working----------------------//
let todoInp = document.querySelector("#todo-input");
let todoArr = [];
let todoShow = document.querySelector("#todo-show");

function todoInput(event) {
        event.preventDefault();
            todoArr.push(todoInp.value);
            todoInp.value.innerText="";
            showTodos();
     }

     console.log(todoArr)

function showTodos(){
    todoShow.innerHTML=""
      for (let i = 0; i < todoArr.length; i++) {
        todoShow.innerHTML += `${todoArr[i]} <button onclick="deleteTodo(${i})">Delete</button></br>`;
    }
}
// showTodos()

function deleteTodo(index) {
    todoArr.splice(index, 1); 
    showTodos(); 
}

