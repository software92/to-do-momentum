const greetingForm = document.querySelector(".greeting-form");
const greetingInput = greetingForm.querySelector(".greeting-input");
const greeting = document.querySelector("h1.greeting");

const showGreeting = (name) => {
  greeting.innerHTML = name;
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
