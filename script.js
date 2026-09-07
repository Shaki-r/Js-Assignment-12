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
