const SELECTORS = {
  form: "form",
  input: "input",
  city: "#city",
  date: "#date",
  temp: "#temp",
  weather: "#weather",
  tempRange: "#temp-range",
  results: "#results",
};

const API_KEY = "35dfabe26c402e8ccaecbfac1accef4e";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const $form = document.querySelector(SELECTORS.form);
const $input = document.querySelector(SELECTORS.input);
const $city = document.querySelector(SELECTORS.city);
const $date = document.querySelector(SELECTORS.date);
const $temp = document.querySelector(SELECTORS.temp);
const $weather = document.querySelector(SELECTORS.weather);
const $tempRange = document.querySelector(SELECTORS.tempRange);
const $results = document.querySelector(SELECTORS.results);

function changeResultsVisibility(visible) {
  $results.setAttribute("data-display", visible);
}

async function searchWeather(cityName) {
  const response = await fetch(
    `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return {
    city: data.name,
    date: new Date().toLocaleDateString(),
    temp: `${Math.round(data.main.temp)}°C`,
    weather: data.weather[0].main,
    tempRange: `${Math.round(data.main.temp_min)}°C / ${Math.round(
      data.main.temp_max
    )}°C`,
  };
}
function displayWeatherResults(results) {
  const { city, date, temp, weather, tempRange } = results;
  $city.textContent = city;
  $date.textContent = date;
  $temp.textContent = temp;
  $weather.textContent = weather;
  $tempRange.textContent = tempRange;
  changeResultsVisibility(true);
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = $input.value.trim();
  if (!searchValue) {
    alert("Please introduce a city name.");
    return;
  }
  changeResultsVisibility(false);
  searchWeather(searchValue)
    .then(displayWeatherResults)
    .catch(() => {
      alert(
        "Something went wrong, make sure in introduce a correct city name."
      );
    })
    .finally(() => {
      $input.value = "";
      $input.focus();
    });
});
