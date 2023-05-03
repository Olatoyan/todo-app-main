"use strict";

const main = document.querySelector(".main");
const darkMode = document.querySelector(".moon__icon");
const lightMode = document.querySelector(".light__icon");
const body = document.querySelector("body");
const inputBox = document.querySelector(".input__box");
const todoInput = document.querySelector(".todo__input ");
const todoListBox = document.querySelector(".todo__list-box");
const todoInputField = document.querySelector(".todo__input");
const todoTextBox = document.querySelector(".todo__text-box ");
// const checkIcon = document.querySelectorAll(".check__icon"); // .checked__icon display when clicked
const todoLists = document.querySelectorAll(".todo__list");
const todoText = document.querySelectorAll(".todo__text"); // .checked__text  add when checked__icon is displayed
const checkedText = document.querySelectorAll(".checked__text");
const deleteTodoText = document.querySelectorAll(".remove__icon");
// const itemsLeftNum = document.querySelector(".items__left--num");
const summaryBox = document.querySelector(".summary__box");
const todoStates = document.querySelector(".todo__states");
const allStates = document.querySelector(".all__states");
const activeStates = document.querySelector(".active__states");
const completedStates = document.querySelector(".completed__states");
const clearCompleted = document.querySelector(".clear__completed");

todoTextBox.textContent = "";
function updateTodoColors() {
  const addedTodoText = todoTextBox.querySelectorAll(".todo__text");
  addedTodoText.forEach((text) => {
    if (lightMode.style.display === "none") {
      text.style.color = "#25273c";
    } else if (darkMode.style.display === "none") {
      text.style.color = "#fafafa";
    }
  });
}

// const addToList = function (upper) {
//   todoTextBox.insertAdjacentHTML(
//     "beforeend",
//     `
//       <div class="todo__list">
//         <div class="check__icon"></div>
//         <p class="todo__text">${upper}</p>
//         <img
//           src="images/icon-cross.svg"
//           alt="add icon"
//           class="remove__icon"
//         />
//       </div>
//     `
//   );

//   let todos = document.querySelectorAll(".todo__list").length;
//   todos.forEach(function (todo) {
//     console.log(todo);
//   });
//   const del = document.querySelectorAll(".remove__icon");
//   todoTextBox.addEventListener("click", function (e) {
//     console.log(e.target);
//     if (e.target.classList.contains("check__icon")) {
//       const isChecked = e.target.classList.toggle("checked__icon");
//       if (isChecked) {
//         todos--;
//       } else {
//         todos++;
//       }

//       if (e.target.closest(".todo__list")) {
//         e.target.parentNode
//           .querySelector(".todo__text")
//           .classList.toggle("checked__text");
//       }
//     }
//     if (e.target.classList.contains("remove__icon")) {
//       e.target.closest(".todo__list").remove();
//       todos--;
//     }
//     itemsLeftNum.textContent = todos;
//   });

//   itemsLeftNum.textContent = todos;
//   const addedTodoText =
//     todoTextBox.lastElementChild.querySelector(".todo__text");

//   if (lightMode.style.display === "none") {
//     addedTodoText.style.color = "#25273c";
//   } else if (darkMode.style.display === "none") {
//     addedTodoText.style.color = "#fafafa";
//   }
// };

let s;

// let todos = document.querySelectorAll(".todo__list");
// const del = document.querySelectorAll(".remove__icon");

// function handleTodoClick(e) {
//   if (e.target.classList.contains("check__icon")) {
//     const isChecked = e.target.classList.toggle("checked__icon");
//     if (isChecked) {
//       todos--;
//     } else {
//       todos++;
//     }

//     if (e.target.closest(".todo__list")) {
//       e.target.parentNode
//         .querySelector(".todo__text")
//         .classList.toggle("checked__text");
//     }
//   }
//   if (e.target.classList.contains("remove__icon")) {
//     e.target.closest(".todo__list").remove();
//     todos--;
//   }
//   itemsLeftNum.textContent = todos.length;
// }

// todoTextBox.addEventListener("click", handleTodoClick);

// const addToList = function (upper) {
//   todoTextBox.insertAdjacentHTML(
//     "beforeend",
//     `
//       <div class="todo__list">
//         <div class="check__icon"></div>
//         <p class="todo__text">${upper}</p>
//         <img
//           src="images/icon-cross.svg"
//           alt="add icon"
//           class="remove__icon"
//         />
//       </div>
//     `
//   );

//   itemsLeftNum.textContent = todos.length;
//   const addedTodoText =
//     todoTextBox.lastElementChild.querySelector(".todo__text");

//   if (lightMode.style.display === "none") {
//     addedTodoText.style.color = "#25273c";
//   } else if (darkMode.style.display === "none") {
//     addedTodoText.style.color = "#fafafa";
//   }
// };
let h;

// console.log(todos);
// let todos = document.querySelectorAll(".todo__list").length;
let ha;
// const del = document.querySelectorAll(".remove__icon");
// const itemsLeftNum = document.querySelector(".items__left--num");

// const addToList = function (upper) {
//   todoTextBox.insertAdjacentHTML(
//     "beforeend",
//     `
//       <div class="todo__list">
//         <div class="check__icon"></div>
//         <p class="todo__text">${upper}</p>
//         <img
//           src="images/icon-cross.svg"
//           alt="add icon"
//           class="remove__icon"
//         />
//       </div>
//     `
//   );

//   let todos = document.querySelectorAll(".todo__list");
//   itemsLeftNum.textContent = todos.length;
//   const addedTodoText =
//     todoTextBox.lastElementChild.querySelector(".todo__text");

//   if (lightMode.style.display === "none") {
//     addedTodoText.style.color = "#25273c";
//   } else if (darkMode.style.display === "none") {
//     addedTodoText.style.color = "#fafafa";
//   }

//   function handleTodoClick(e) {
//     if (e.target.classList.contains("check__icon")) {
//       const isChecked = e.target.classList.toggle("checked__icon");
//       if (isChecked) {
//         todos--;
//       } else {
//         todos++;
//       }

//       if (e.target.closest(".todo__list")) {
//         e.target.parentNode
//           .querySelector(".todo__text")
//           .classList.toggle("checked__text");
//       }
//     }
//     if (e.target.classList.contains("remove__icon")) {
//       e.target.closest(".todo__list").remove();
//       todos--;
//     }
//     itemsLeftNum.textContent = todos.length;
//   }

//   todoTextBox.addEventListener("click", handleTodoClick);
// };
const del = document.querySelectorAll(".remove__icon");
const itemsLeftNum = document.querySelector(".items__left--num");

let todos = document.querySelectorAll(".todo__list");

const addToList = function (upper) {
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

  todos = document.querySelectorAll(".todo__list:not(.checked__icon)");
  itemsLeftNum.textContent = todos.length;
  const addedTodoText =
    todoTextBox.lastElementChild.querySelector(".todo__text");

  if (lightMode.style.display === "none") {
    addedTodoText.style.color = "#25273c";
  } else if (darkMode.style.display === "none") {
    addedTodoText.style.color = "#fafafa";
  }

  function handleTodoClick(e) {
    if (e.target.classList.contains("check__icon")) {
      e.target.classList.toggle("checked__icon");
      todos = document.querySelectorAll(".todo__list:not(.checked__icon)");
      itemsLeftNum.textContent = parseInt(todos.length);

      if (e.target.classList.contains("checked__icon")) {
        itemsLeftNum.textContent = parseInt(itemsLeftNum.textContent) - 1;
      } else {
        itemsLeftNum.textContent = parseInt(itemsLeftNum.textContent);
      }
      if (e.target.closest(".todo__list")) {
        e.target.parentNode
          .querySelector(".todo__text")
          .classList.toggle("checked__text");
      }
    }
    if (e.target.classList.contains("remove__icon")) {
      e.target.closest(".todo__list").remove();
      todos = document.querySelectorAll(".todo__list:not(.checked__icon)");
      itemsLeftNum.textContent = parseInt(todos.length);
    }
  }

  todoTextBox.addEventListener("click", handleTodoClick);
};

const clearTodoInput = function () {
  todoInput.value = "";
};

const handleEnterKey = function (e) {
  if (e.key === "Enter") {
    if (todoInput.value === "") {
      todoInput.style.border = "1px solid #ff0000";
      return;
    } else {
      todoInput.style.border = "none";
    }
    const value = todoInput.value.trim();
    const upper =
      value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    addToList(upper);
    clearTodoInput();
  }
};

const removeTodoItem = function (e) {
  if (e.target.classList.contains("remove__icon")) {
    e.target.closest(".todo__list").remove();
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
  main.style.backgroundImage = "url(images/bg-desktop-light.jpg)";
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
  main.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
  summaryBox.style.color = "#777a92";

  updateTodoColors();
};

document.addEventListener("keypress", handleEnterKey);
lightMode.addEventListener("click", dispLightMode);
darkMode.addEventListener("click", dispDarkMode);
// todoTextBox.addEventListener("click", removeTodoItem);
