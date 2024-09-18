let API_key = "26ed425e4a97a8faef9a3ad397b6132e";

function getWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=imperial`;
    return fetch(URL)
        .then(response => response.json())
        .catch(() => null);
}

function searchCity() {
    const cityInput = document.getElementById("city-input");
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    getWeatherData(city).then(response => {
        if (!response || response.cod !== 200) {
            alert("City not found or network error. Please try again.");
            document.getElementById('city-name').innerText = "";
            return;
        }

        showWeatherdata(response);
        cityInput.value = "";
    });
}

function showWeatherdata(weatherData) {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('min-temp').innerText = weatherData.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max;
    document.getElementById('Wind-speed').innerText = weatherData.wind.speed;
}
