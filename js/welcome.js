const greetingForm = document.querySelector(".greeting-form");
const greetingInput = greetingForm.querySelector(".greeting-input");
const greeting = document.querySelector("h1.greeting");

const handleLogout = () => {
  localStorage.removeItem("username");
  location.reload();
};

const showGreeting = (name) => {
  const btnContainer = document.createElement("div");
  const logoutBtn = document.createElement("div");

  btnContainer.classList.add("button-container");
  logoutBtn.classList.add("button");

  logoutBtn.innerHTML = "Logout";

  logoutBtn.addEventListener("click", handleLogout);

  btnContainer.append(logoutBtn);

  greeting.innerHTML = `Hi! ${name}`;
  greeting.append(btnContainer);
  greeting.classList.remove("hidden");
};

const handleGreetingSubmit = (e) => {
  e.preventDefault();
  const name = greetingInput.value;
  if (!name.trim()) {
    greetingInput.value = null;
    alert("Enter your name!");
    return;
  }

  greetingForm.classList.add("hidden");
  showGreeting(name);
  localStorage.setItem("username", name);
};

const loadWelcome = () => {
  const loggedUser = localStorage.getItem("username");

  if (loggedUser) {
    showGreeting(loggedUser);
  } else {
    greetingForm.classList.remove("hidden");
    greetingForm.addEventListener("submit", handleGreetingSubmit);
  }
};

loadWelcome();
