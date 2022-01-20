const toDoForm = document.querySelector(".to-do-form");
const toDoInput = document.querySelector(".to-do-input");
const toDoList = document.querySelector(".to-do__list");

let toDos = [];

const handleCheckBtn = (e) => {
  e.preventDefault();
  // const id = Number(e.target.parentNode.id);

  // console.log(id);
  // const a = toDos.filter((obj) => id !== obj.id);
  // console.log(a);
};
const handleDelBtn = (e) => {
  e.preventDefault();
  const id = Number(e.target.parentNode.id);

  const filterToDos = toDos.filter((obj) => id !== obj.id);
  toDos = filterToDos;
  toDoList.removeChild(e.target.parentNode);

  localStorage.setItem("toDos", JSON.stringify(toDos));
};

const showToDos = (obj) => {
  const toDoItem = document.createElement("li");
  const toDoSpan = document.createElement("span");
  const toDoCheck = document.createElement("button");
  const toDoDel = document.createElement("button");

  toDoItem.id = obj.id;

  toDoItem.classList.add("to-do__Item");
  toDoCheck.classList.add("to-do__check");
  toDoDel.classList.add("to-do__del");

  toDoSpan.innerHTML = obj.toDo;
  toDoCheck.innerHTML = "Check";
  toDoDel.innerHTML = "Del";

  toDoCheck.addEventListener("click", handleCheckBtn);
  toDoDel.addEventListener("click", handleDelBtn);

  toDoItem.appendChild(toDoSpan);
  toDoItem.appendChild(toDoCheck);
  toDoItem.appendChild(toDoDel);
  toDoList.appendChild(toDoItem);
};

const loadToDos = () => {
  const LS_TODOS = localStorage.getItem("toDos");

  if (LS_TODOS) {
    const parsedToDos = JSON.parse(LS_TODOS);

    toDos = parsedToDos;
    parsedToDos.map((item) => showToDos(item));
  }
  toDoForm.addEventListener("submit", handleToDoSubmit);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = null;

  let toDoObj;

  if (!toDos.length) {
    toDoObj = {
      id: 1,
      toDo,
    };
  } else {
    toDoObj = {
      id: toDos[toDos.length - 1].id + 1,
      toDo,
    };
  }

  toDos.push(toDoObj);
  localStorage.setItem("toDos", JSON.stringify(toDos));
  showToDos(toDoObj);
};

loadToDos();
