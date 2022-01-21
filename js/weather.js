const weather = document.querySelector("h3.weather");

const geoSuccess = (result) => {
  const API_KEY = "8a6ce7ad954fa49acaa293e3f21305a3";

  const lat = result.coords.latitude;
  const lon = result.coords.longitude;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      weather.innerHTML = `${json.name} ${json.main.temp} °C`;
    });
};

navigator.geolocation.getCurrentPosition(geoSuccess);
