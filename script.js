// Select DOM elements
const form = document.getElementById('task-form');         // The form for submitting new tasks
const input = document.getElementById('task-input');       // The input field where users type their task
const taskList = document.getElementById('task-list');     // The container (ul) where tasks will be displayed

// Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Handle form submission to add a new task
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on form submission

  const taskText = input.value.trim(); // Get input and remove whitespace

  if (taskText !== '') {
    addTask(taskText);         // Add the task to the UI
    saveTaskToStorage(taskText); // Save the task to localStorage
    input.value = '';          // Clear the input field
  }
});

// Function to create and display a new task
function addTask(text) {
  const li = document.createElement('li');         // Create <li> for the task
  li.textContent = text;                           // Set its text

  li.classList.add('task-item');                   // Add styling class

  const removeBtn = document.createElement('button'); // Create remove button
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');           // Style it
  removeBtn.addEventListener('click', function () {
    li.remove();                                   // Remove from DOM
    removeTaskFromStorage(text);                   // Remove from localStorage
  });

  li.appendChild(removeBtn);                       // Attach button to task
  taskList.appendChild(li);                        // Add task to task list
}

// Save task to localStorage
function saveTaskToStorage(task) {
  const tasks = getTasksFromStorage();             // Get current tasks
  tasks.push(task);                                // Add new one
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated list
}

// Load and render all saved tasks from localStorage
function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => addTask(task));            // Add each task to UI
}

// Get task array from localStorage, or empty array if none
function getTasksFromStorage() {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
}

// Remove a task from localStorage
function removeTaskFromStorage(taskText) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskText); // Remove by value
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated list
}
