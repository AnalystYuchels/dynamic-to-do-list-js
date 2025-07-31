// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

  // Select necessary DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    
      // Get and trim the input value
      const taskText = taskInput.value.trim();

      // Check if the input is empty
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a "Remove" button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Attach an event to remove the task when clicked
      removeBtn.onclick = function () {
          taskList.removeChild(listItem);
      };

      // Append the button to the list item and the item to the task list
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
  }

  // Add event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Allow adding task with "Enter" key
  taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Optional: call addTask on DOMContentLoaded if needed (not strictly necessary here)
  // addTask();
});
