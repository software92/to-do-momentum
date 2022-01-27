const timeline = document.querySelector("h2.clock");

const clock = () => {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  //   const seconds = String(time.getSeconds()).padStart(2, "0");

  //   timeline.innerHTML = `${hours}:${minutes}:${seconds}`;
  timeline.innerHTML = `${hours}:${minutes}`;
};

clock();
setInterval(clock, 1000);
