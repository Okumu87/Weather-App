"use strict";

// elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

// Adding eventlistener to Btn

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("please enter a city!");

    return;
  }

  try {
    // Fetch Weather data from API

    const apiKey = "0991bde3d456380d590c855a419d3e40";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Display the weather

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}`;
    weatherCondition.textContent = `Condition:${data.weather[0].description}`;
    humidity.textContent = `Humidity;${data.main.humidity}%`;
    windSpeed.textContent = `Windspeed: ${data.wind.speed} m/s`;

    // Set weather icon

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
  } catch (error) {
    // Handle Error
    console.error("Error fetching weather data:", error);

    alert("city not found. Please try again ");
  }
});
