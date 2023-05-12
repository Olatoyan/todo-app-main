"use strict";

const header = document.querySelector(".header");
const darkMode = document.querySelector(".moon__icon");
const lightMode = document.querySelector(".light__icon");
const body = document.querySelector("body");
const inputBox = document.querySelector(".input__box");
const todoInput = document.querySelector(".todo__input ");
const todoListBox = document.querySelector(".todo__list-box");
const todoInputField = document.querySelector(".todo__input");
const todoTextBox = document.querySelector(".todo__text-box ");
const todoLists = document.querySelectorAll(".todo__list");
const todoText = document.querySelectorAll(".todo__text");
const checkedText = document.querySelectorAll(".checked__text");
const deleteTodoText = document.querySelectorAll(".remove__icon");
const summaryBox = document.querySelector(".summary__box");
const todoStates = document.querySelector(".todo__states");
const allStates = document.querySelector(".all__states");
const activeStates = document.querySelector(".active__states");
const completedStates = document.querySelector(".completed__states");
const clearCompleted = document.querySelector(".clear__completed");

todoTextBox.textContent = "";

// Function to update todo colors based on the selected mode
function updateTodoColors() {
  const addedTodoText = todoTextBox.querySelectorAll(".todo__text");
  addedTodoText.forEach((text) => {
    // Loop through each added todo item and update its color based on the currently selected mode

    if (lightMode.style.display === "none") {
      text.style.color = "#25273c";
    } else if (darkMode.style.display === "none") {
      text.style.color = "#fafafa";
    }
  });
}

// Select all the remove icons and the items left count element
const del = document.querySelectorAll(".remove__icon");
const itemsLeftNum = document.querySelector(".items__left--num");

// Select all the todo items
let todos = document.querySelectorAll(".todo__list");

// Function to add a new todo item to the list
const addToList = function (upper) {
  // Add the new todo item to the end of the todo list
  todoTextBox.insertAdjacentHTML(
    "beforeend",
    `
      <div class="todo__list">
        <div class="check__icon"></div>
        <p class="todo__text">${upper}</p>
        <img
          src="images/icon-cross.svg"
          alt="add icon"
          class="remove__icon"
        />
      </div>
    `
  );

  // Update the list of todo items and the count of items left
  todos = document.querySelectorAll(".todo__list:not(.checked__icon)");
  itemsLeftNum.textContent = todos.length;

  // Select the text of the added todo item and update its color based on the currently selected mode
  const addedTodoText =
    todoTextBox.lastElementChild.querySelector(".todo__text");
  if (lightMode.style.display === "none") {
    addedTodoText.style.color = "#25273c";
  } else if (darkMode.style.display === "none") {
    addedTodoText.style.color = "#fafafa";
  }

  // Function to handle clicks on todo items
  function handleTodoClick(e) {
    if (e.target.classList.contains("check__icon")) {
      // Toggle the "checked" status of the clicked todo item
      e.target.classList.toggle("checked__icon");
      e.target
        .closest(".todo__list")
        .querySelector(".todo__text")
        .classList.toggle("checked__text");

      // Update the count of items left based on the number of checked items
      const todos = document.querySelectorAll(".todo__list");
      let checkedItemsCount = 0;
      todos.forEach((todo) => {
        if (
          todo.querySelector(".check__icon").classList.contains("checked__icon")
        ) {
          checkedItemsCount++;
        }
      });
      itemsLeftNum.textContent = todos.length - checkedItemsCount;
    }

    if (e.target.classList.contains("remove__icon")) {
      // Remove the clicked todo item and update the count of items left
      e.target.closest(".todo__list").remove();
      const todos = document.querySelectorAll(
        ".todo__list:not(.checked__icon)"
      );
      itemsLeftNum.textContent = todos.length;
    }
  }

  // Add event listeners for clicks on the added todo item
  todoTextBox.addEventListener("click", handleTodoClick);
};

// Function to show only the checked todo items
const showCheckedTodos = function () {
  const todos = Array.from(document.querySelectorAll(".todo__list"));

  todoTextBox.textContent = ""; // clear previous contents

  // Loop through all the todos
  todos.forEach(function (todo) {
    const checkedIcon = todo.querySelector(".checked__icon");
    // Check if the todo has a checked icon
    if (checkedIcon) {
      const todoText = todo.querySelector(".todo__text").textContent;

      // Insert the checked todo item in the todoTextBox
      todoTextBox.insertAdjacentHTML(
        "beforeend",
        `<div class="todo__list"><div class="check__icon checked__icon"></div><p class="todo__text">${todoText}</p><img src="images/icon-cross.svg" alt="add icon" class="remove__icon"></div>`
      );
    }
  });
};

// This function shows all the todo items that have not been checked.
const showUnCheckedTodos = function () {
  const todos = Array.from(document.querySelectorAll(".todo__list"));

  todoTextBox.textContent = ""; // clear previous contents

  // Loop through all the todos
  todos.forEach(function (todo) {
    const checkedIcon = todo.querySelector(".checked__icon");
    // Check if the todo does not have a checked icon
    if (!checkedIcon) {
      const todoText = todo.querySelector(".todo__text").textContent;

      // Insert the unchecked todo item in the todoTextBox
      todoTextBox.insertAdjacentHTML(
        "beforeend",
        `<div class="todo__list"><div class="check__icon"></div><p class="todo__text">${todoText}</p><img src="images/icon-cross.svg" alt="add icon" class="remove__icon"></div>`
      );
    }
  });
};

// This function filters the todo items based on the selected state (All, Active, Completed)

const filterTodo = function (e) {
  // Remove the clicked__states class from all the filter buttons

  allStates.classList.remove("clicked__states");
  activeStates.classList.remove("clicked__states");
  completedStates.classList.remove("clicked__states");
  clearCompleted.classList.remove("clicked__states");

  // Show all the todo items when the All button is clicked

  if (e.target.classList.contains("all__states")) {
    e.target.classList.add("clicked__states");
    const todoItems = document.querySelectorAll(".todo__list");
    todoItems.forEach((item) => {
      item.style.display = "flex";
    });
  }

  // Show only the unchecked todo items when the Active button is clicked
  if (e.target.classList.contains("active__states")) {
    e.target.classList.add("clicked__states");
    const todoItems = document.querySelectorAll(".todo__list");
    // Loop through all the todo items and display only the unchecked items
    todoItems.forEach((item) => {
      const checkedIcon = item.querySelector(".checked__icon");
      if (!checkedIcon) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Show only the checked todo items when the Completed button is clicked
  if (e.target.classList.contains("completed__states")) {
    e.target.classList.add("clicked__states");
    const todoItems = document.querySelectorAll(".todo__list");
    // Loop through all the todo items and display only the checked items
    todoItems.forEach((item) => {
      const checkedIcon = item.querySelector(".checked__icon");
      if (checkedIcon) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Deletes all the checked todo items when the clear Completed button is clicked
  if (e.target.classList.contains("clear__completed")) {
    e.target.classList.add("clicked__states");
    const checkedTodos = document.querySelectorAll(".checked__icon");
    checkedTodos.forEach(function (todo) {
      todo.closest(".todo__list").remove();
    });
    const todos = document.querySelectorAll(".todo__list").length;
    itemsLeftNum.textContent = todos;
  }
};

// Add event listener to the summaryBox element and call filterTodo function when clicked
summaryBox.addEventListener("click", filterTodo);

// Function to clear the todoInput value
const clearTodoInput = function () {
  todoInput.value = "";
};

// Function to handle when the enter key is pressed
const handleEnterKey = function (e) {
  if (e.key === "Enter") {
    if (todoInput.value === "") {
      todoInput.style.border = "1px solid #ff0000";
      return;
    } else {
      todoInput.style.border = "none";
    }

    // Get the trimmed value of the todoInput and format it to have the first letter uppercase and the rest lowercase
    const value = todoInput.value.trim();
    const upper =
      value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();

    // Add the formatted value to the todo list by calling the addToList function and passing in the formatted value
    addToList(upper);

    // Call the clearTodoInput function to clear the todoInput value
    clearTodoInput();
  }
};

// Function to remove a todo item
const removeTodoItem = function (e) {
  // Check if the clicked element has the class of "remove__icon"
  if (e.target.classList.contains("remove__icon")) {
    // Remove the closest parent element with the class of "todo__list"
    e.target.closest(".todo__list").remove();
    // Update the itemsLeftNum element with the number of todos remaining
    const todos = document.querySelectorAll(".todo__list").length;
    itemsLeftNum.textContent = todos;
  }
};

const dispLightMode = function () {
  lightMode.style.display = "none";
  darkMode.style.display = "block";
  body.style.backgroundColor = "#e4e5f1";
  body.style.color = "#161722";
  inputBox.style.backgroundColor = "#fafafa";
  todoInput.style.backgroundColor = "#fafafa";
  todoListBox.style.backgroundColor = "#fafafa";
  todoInput.style.color = "#161722";
  checkedText.forEach((text) => (text.style.color = "#cacde8"));
  header.style.backgroundImage = "url(images/bg-desktop-light.jpg)";
  summaryBox.style.color = "#25273c";

  updateTodoColors();
};

const dispDarkMode = function () {
  lightMode.style.display = "block";
  darkMode.style.display = "none";
  body.style.backgroundColor = "#25273c";
  inputBox.style.backgroundColor = "#161722";
  todoInput.style.backgroundColor = "#161722";
  todoListBox.style.backgroundColor = "#161722";
  todoInput.style.color = "#fafafa";
  checkedText.forEach((text) => (text.style.color = "#777a92"));
  header.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
  summaryBox.style.color = "#777a92";

  updateTodoColors();
};

document.addEventListener("keypress", handleEnterKey);
lightMode.addEventListener("click", dispLightMode);
darkMode.addEventListener("click", dispDarkMode);
