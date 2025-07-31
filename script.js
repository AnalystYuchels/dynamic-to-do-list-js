// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn'); // Add Task button
  const taskInput = document.getElementById('task-input');   // Input field for new tasks
  const taskList = document.getElementById('task-list');     // Task list container

  // Load existing tasks from localStorage when the page loads
  loadTasks();

  // Function to load tasks from localStorage and display them
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // Don't resave while loading
  }

  // Function to add a new task to the DOM and optionally to localStorage
  function addTask(taskText, saveToStorage = true) {
      const li = document.createElement('li');          // Create new list item
      li.textContent = taskText;
      li.classList.add('task-item');                    // Add styling class

      // Create the remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');            // Add styling class

      // Add event to remove task
      removeBtn.addEventListener('click', () => {
          taskList.removeChild(li);                     // Remove task from UI
          removeTaskFromStorage(taskText);              // Remove from localStorage
      });

      li.appendChild(removeBtn);                        // Add button to task
      taskList.appendChild(li);                         // Add task to the list

      // Save task to localStorage
      if (saveToStorage) {
          const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
          tasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      }
  }

  // Function to remove a task from localStorage
  function removeTaskFromStorage(taskText) {
      let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks = tasks.filter(task => task !== taskText); // Remove matching task
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
  }

  // Function to handle Add Task button click
  function handleAddTask() {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
          alert('Please enter a task!');
          return;
      }

      addTask(taskText);         // Add to DOM and localStorage
      taskInput.value = '';      // Clear input field
  }

  // Add event listener for Add Task button
  addButton.addEventListener('click', handleAddTask);

  // Allow adding tasks by pressing "Enter" key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          handleAddTask();
      }
  });
});
