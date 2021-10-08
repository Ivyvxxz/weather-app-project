function enterCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let searchInput = document.querySelector("#search-input");
  currentCity.innerHTML = searchInput.value;
}
function getTemperature(response) {
  let currentCelsiusTemp = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.main.temp);
  currentCelsiusTemp.innerHTML = temperature;
}
function getConditions(response) {
  let currentConditions = document.querySelector("#current-conditions");
  let conditions = response.data.weather[0].main;
  currentConditions.innerHTML = conditions;
}
function getHumidity(response) {
  let currentHumidity = document.querySelector("#current-humidity");
  let humidity = response.data.main.humidity;
  currentHumidity.innerHTML = humidity;
}
function getWindspeed(response) {
  let currentWindspeed = document.querySelector("#current-windspeed");
  let windspeed = Math.round(response.data.wind.speed);
  currentWindspeed.innerHTML = windspeed;
}

function getData() {
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let units = "metric";
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getTemperature);
  axios.get(apiUrl).then(getConditions);
  axios.get(apiUrl).then(getHumidity);
  axios.get(apiUrl).then(getWindspeed);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);
form.addEventListener("submit", getData);

function showLocationData(response) {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.name;
  let currentCelsiusTemp = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.main.temp);
  currentCelsiusTemp.innerHTML = temperature;
  let currentConditions = document.querySelector("#current-conditions");
  let conditions = response.data.weather[0].main;
  currentConditions.innerHTML = conditions;
  let currentHumidity = document.querySelector("#current-humidity");
  let humidity = response.data.main.humidity;
  currentHumidity.innerHTML = humidity;
  let currentWindspeed = document.querySelector("#current-windspeed");
  let windspeed = Math.round(response.data.wind.speed);
  currentWindspeed.innerHTML = windspeed;
}

function getLocationData(position) {
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showLocationData);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(getLocationData);
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getLocation);

function formatDate() {
  let now = new Date();
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  return `${currentDay}, ${currentHour}:${currentMinutes}`;
}
let currentDAT = document.querySelector("#current-date-and-time");
currentDAT.innerHTML = formatDate();

function changeTemp(event) {
  event.preventDefault();
  let currentCelsiusTemp = document.querySelector("#current-temp");
  currentCelsiusTemp.innerHTML = `60`;
}
function changeTempBack(event) {
  event.preventDefault();
  let currentCelsiusTemp = document.querySelector("#current-temp");
  currentCelsiusTemp.innerHTML = `16`;
}
let fahrenheitLink = document.querySelector("#main-fahrenheit-link");
fahrenheitLink.addEventListener("click", changeTemp);
let celsiusLink = document.querySelector("#main-celsius-link");
celsiusLink.addEventListener("click", changeTempBack);
