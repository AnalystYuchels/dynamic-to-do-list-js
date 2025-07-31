# 📋 Simple Todo List App

This is a basic JavaScript-powered Todo List web app that lets users add and remove tasks, with each task saved in localStorage so they persist even after refreshing the page.


## 🔧 Features

- ✅ Add new tasks
- ✅ Remove tasks
- ✅ Save tasks to localStorage
- ✅ Load saved tasks on page load
- ✅ Styled task items and buttons using `classList.add()`


## 📁 Project Structure

```

todo-app/
├── index.html          # Main HTML page with a form and task display container
├── styles.css          # Basic styling for layout and task visuals
└── script.js           # JavaScript functionality for adding/removing tasks and saving to localStorage

```


## 🚀 How It Works

### 1. Adding a Task
- User types into the input field and submits the form.
- The task gets added as an `<li>` element with a `Remove` button.
- The task is styled using `classList.add("task-item")`.
- It is saved to `localStorage`.

### 2. Removing a Task
- Clicking the `Remove` button deletes the task from the DOM and from `localStorage`.

### 3. Persistent Tasks
- On page load, saved tasks from `localStorage` are loaded and displayed automatically.


## 💻 Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- DOM Manipulation
- `localStorage`
- `classList.add()` for clean styling


## 🎯 Learning Objectives Met

- DOM manipulation with `createElement`, `appendChild`, and `classList.add`
- Handling form input and button events
- Using `localStorage` for persistent browser data
- Clean, readable, and modular code


## 📸 Screenshot (Optional)
> You can add a screenshot here to visualize how it looks.


## 🧠 Author Notes

This project is beginner-friendly and great for understanding the basics of client-side scripting. It focuses on working with the DOM, handling events, and saving user data locally.


## ✅ To Run Locally

1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Add, remove, and refresh to test persistence!


## 📝 License

Free to use and modify for learning and personal projects.