# 📋 To-Do List Web Application

A simple and interactive To-Do List app built using HTML, CSS, and JavaScript. This application allows users to add, remove, and persist tasks using the browser's Local Storage.


## 🧠 Features

- ✅ Add new tasks to a list
- ❌ Remove tasks individually
- 💾 Save and load tasks using Local Storage
- 🔁 Persistent task list across browser sessions
- ⌨️ Add tasks using the Enter key or the "Add Task" button


## 🚀 Getting Started

To run the To-Do List app on your local machine:

1. Clone or download this repository.
2. Open the `index.html` file in your browser.

---

## 📁 Project Structure

```

.
├── index.html          # Main HTML structure of the app
├── styles.css          # CSS file for basic styling
└── script.js           # JavaScript logic (add, remove, persist tasks)

````


## 🛠️ How It Works

### 1. Load Tasks from Local Storage

When the page loads, any previously saved tasks in `localStorage` are retrieved and rendered on the page using the `loadTasks()` function.

```javascript
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save to localStorage
}
````


### 2. Add Tasks and Save to Local Storage

The `addTask()` function is responsible for:

* Creating a new task element.
* Appending it to the DOM.
* Saving the task to Local Storage (unless specified otherwise).

```javascript
function addTask(taskText, save = true) {
    // DOM creation logic

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}
```


### 3. Remove Tasks and Update Local Storage

Each task includes a **Remove** button that deletes it from the DOM and updates Local Storage:

```javascript
removeBtn.onclick = function () {
    taskList.removeChild(listItem);

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};
```


## 📦 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Web APIs: `localStorage`


## 🧪 Testing the App

* Add a few tasks using the input field and **Add Task** button or press **Enter**.
* Refresh the browser — tasks should still be visible.
* Click **Remove** on any task — it should disappear permanently.


## 📜 License

This project is licensed under the MIT License.