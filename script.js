const loadTemparatureData = () => {
  // === !!! const WEATHER_API_KEY = "USE_YOUR_OWN_KEY_from_api.openweathermap.org!!!"; !!! ===
  const inputValue = document.getElementById("input-value");
  const weatherStatus = document.getElementById("weather-status");

  if (inputValue == 0) {
    console.log("input city name");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => displayTemparature(data));
  }
  inputValue.value = "";
  weatherStatus.innerHTML = "";
};
const displayTemparature = (data) => {
  console.log(data);
  const weatherStatus = document.getElementById("weather-status");
  const weatherInfo = document.createElement("div");

  const sunriseCode = data.sys.sunrise;
  const sunriseTime = new Date(sunriseCode * 1000);
  const sunsetCode = data.sys.sunset;
  const sunsetTime = new Date(sunsetCode * 1000);

  weatherInfo.innerHTML = `
  <img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@2x.png" alt="smart weather info icon">
  <h1 id="city-name">${data.name}</h1>
  <h3>Temperature: <span id="celcius-number">${(
    data.main.temp - 273.15
  ).toFixed(2)}</span> &deg;C</h3>
  <h3>Wind speed: <span id="celcius-number">${data.wind.speed}
  </span> m/sec</h3>
  <br/>
  <h1 class="lead">Sunrise : ${sunriseTime}</h1>
  <h1 class="lead">Sunset : ${sunsetTime}</h1>
  `;

  weatherStatus.appendChild(weatherInfo);
};
