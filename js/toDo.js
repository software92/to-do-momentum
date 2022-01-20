const toDoForm = document.querySelector(".to-do-form");
const toDoInput = document.querySelector(".to-do-input");
const toDoList = document.querySelector(".to-do__list");

let toDos = [];

const saveLS = () => {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};
const handleDoneBtn = (e) => {
  e.preventDefault();
  const {
    target: { parentNode: item },
  } = e;

  const toNumber = Number(item.id);

  console.log(item.id);
  item.classList.toggle("done");
  toDos.map((toDo) => {
    if (toDo.id === toNumber) {
      toDo.isDone = !toDo.isDone;
    }
  });

  saveLS();
  console.log(toDos);
};
const handleDelBtn = (e) => {
  e.preventDefault();
  const id = Number(e.target.parentNode.id);

  const filterToDos = toDos.filter((obj) => id !== obj.id);
  toDos = filterToDos;
  toDoList.removeChild(e.target.parentNode);

  saveLS();
};

const showToDos = (obj) => {
  const toDoItem = document.createElement("li");
  const toDoSpan = document.createElement("span");
  const toDoDone = document.createElement("button");
  const toDoDel = document.createElement("button");

  toDoItem.id = obj.id;

  toDoItem.classList.add("to-do__item");
  toDoDone.classList.add("to-do__done");
  toDoDel.classList.add("to-do__del");

  if (obj.isDone === true) {
    toDoItem.classList.add("done");
  }

  toDoSpan.innerHTML = obj.toDo;
  toDoDone.innerHTML = "Done";
  toDoDel.innerHTML = "Del";

  toDoDone.addEventListener("click", handleDoneBtn);
  toDoDel.addEventListener("click", handleDelBtn);

  toDoItem.appendChild(toDoSpan);
  toDoItem.appendChild(toDoDone);
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

  let toDoObj = {
    toDo,
    isDone: false,
  };

  if (!toDos.length) {
    toDoObj.id = 1;
  } else {
    toDoObj.id = toDos[toDos.length - 1].id + 1;
  }

  toDos.push(toDoObj);
  saveLS();
  showToDos(toDoObj);
};

loadToDos();
