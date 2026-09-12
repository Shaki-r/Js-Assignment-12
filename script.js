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
let todoArr =JSON.parse(localStorage.getItem("Todos")) || [];
let todoShow = document.querySelector("#todo-show")


function todoInput(event) {
        event.preventDefault();
        if (todoInp.value.trim() === "") {
    return;
  }
            todoArr.push(todoInp.value);
            let todoString=JSON.stringify(todoArr)
            localStorage.setItem("Todos",todoString) 
            showTodos();
           todoInp.value="";
     }
function showTodos(){
    todoShow.innerHTML=""
      for (let i = 0; i < todoArr.length; i++) {
        todoShow.innerHTML += `<li>${todoArr[i]} <div class="btn-div"><button class="del-btn" onclick="deleteTodo(${i})">🗑️</button><button onclick="editTodo(${i})" >Edit</button></div></br></li>`;
    }
}
showTodos()

function deleteTodo(index) {
    todoArr.splice(index, 1);
    let todoString=JSON.stringify(todoArr)
    localStorage.setItem("Todos",todoString) 
    showTodos(); 
}
function editTodo(index){
 let changeValue = prompt("Enter Your Task and Update...", todoArr[index]);
  
  if (changeValue === null || changeValue.trim() === "") {
    return;
  }
  
  todoArr[index]=changeValue
   let todoString=JSON.stringify(todoArr)
    localStorage.setItem("Todos",todoString) 
    showTodos(); 
}


