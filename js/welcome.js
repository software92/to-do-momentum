const greetingForm = document.querySelector(".greeting-form");
const greetingInput = greetingForm.querySelector(".greeting-input");
const greetingSubmit = greetingForm.querySelector(".greeting-submit");
const greeting = document.querySelector("h1.greeting");

const showGreeting = (name) => {
  greeting.innerHTML = name;
  greeting.classList.remove("hidden");
};
const handleGreetingSubmit = (e) => {
  e.preventDefault();
  const name = greetingInput.value;

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
