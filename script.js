const apikey = "22c22a262dca83bc40a902b70e7e661a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  // Display city, temperature, humidity, and wind speed
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  // Set weather icon based on weather condition
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "img/mist.png";
  }

  // Display day and date
  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getDay()];
  const currentDate = now.getDate();

  document.querySelector(".day").innerHTML = currentDay;
  document.querySelector(".date").innerHTML = currentDate;

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim(); // Remove any extra spaces
  
  
if (city === "") {
  // Show the custom popup if input is empty
  alertPopup.style.display = "flex";
} else {
  checkWeather(city);
}
});

// Close the popup when the "OK" button is clicked
closePopup.addEventListener("click", () => {
alertPopup.style.display = "none";
});