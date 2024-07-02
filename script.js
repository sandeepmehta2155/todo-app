function select(tag) {
  return document.querySelector(tag);
}

const iconWrapper = ["flex", "justify-between", "items-center"];
const itemClassList = [
  ...iconWrapper,
  "mt-4",
  "w-[250px]",
  "border",
  "px-2",
  "py-1",
  "rounded-md",
  "text-gray-600",
];
const todoInput = select(".todo-input");
const todoBtn = select(".todo-btn");
const todoList = select(".todo-list");

function addTodo(val) {
  const addListItem = document.createElement("li");

  addListItem.innerText = val;
  addListItem.classList.add(...itemClassList);

  const iconWrapperElement = document.createElement("span");

  const tickBtn = document.createElement("button");
  tickBtn.innerHTML = `<span class="tick material-symbols-outlined cursor-pointer">done</span>`;

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<span class="trash material-symbols-outlined cursor-pointer">delete</span>`;

  iconWrapperElement.appendChild(tickBtn);
  iconWrapperElement.appendChild(trashBtn);

  addListItem.appendChild(iconWrapperElement);

  todoList.appendChild(addListItem);
  gsap.to(addListItem, {
    scale: 1.1,
    opacity: 1,
    duration: 0.9,
    ease: Circ,
  });
}

todoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!!todoInput.value) {
    addTodo(todoInput.value);
  }
  todoInput.value = "";
});

todoList.addEventListener("click", function (e) {
  const todoTrashIcon = e.target;

  if (todoTrashIcon.classList?.[0] === "trash") {
    const todoItem = todoTrashIcon.parentElement.parentElement.parentElement;
    gsap.to(todoItem, {
      opacity: 0,
      scale: 0.9,
      duration: 0.9,
      ease: Circ,
      onComplete: () => todoItem.remove(),
    });
  }
});
