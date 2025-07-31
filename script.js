// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage and populate the list
  loadTasks();

  // Add event listener to the Add Task button
  addButton.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }
      addTask(taskText);
      taskInput.value = '';
  });

  // Allow Enter key to add task
  taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          const taskText = taskInput.value.trim();
          if (taskText === '') {
              alert('Please enter a task.');
              return;
          }
          addTask(taskText);
          taskInput.value = '';
      }
  });

  // Function to add a task to the DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Remove task on click
      removeBtn.addEventListener('click', function () {
          taskList.removeChild(listItem);
          removeFromStorage(taskText);
      });

      // Append and display
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);

      // Save to Local Storage if needed
      if (save) {
          const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          storedTasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
  }

  // Function to remove a task from Local Storage
  function removeFromStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Function to load tasks from Local Storage on page load
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => {
          addTask(taskText, false); // false to avoid re-saving to storage
      });
  }
});
