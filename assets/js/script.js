// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'
const apiKey = '{{27b2d129fc17682d877658d7176b8532}};'

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'imperial'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";

async function fetchWeather() {
    try {
        weatherContainer.innerHTML = '';
        error.innerHTML = '';
        city.innerHTML = '';


        const cnt = 10;
        const cityInputtedByUser = document.getElementById('cityInput').value;

        // how to break this into the daily units?
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;


        const response = await fetch(apiUrl);
        const data = await response.json();

        //Display error if user types invalid city or no city
        if (data.cod == '400' || data.cod == '404') {
            error.innerHTML = `Not valid city. Please input another city`;
            return;
        }
        //Display weather data for each 3 hour increment
        data.list.forEach(dailyWeatherData => {
            const dailyWeatherDataDiv = createWeatherDescription(dailyWeatherData);
            weatherContainer.appendChild(dailyWeatherDataDiv);
        });

        // Display city name based on latitude and longitude
        city.innerHTML = `Daily Weather for ${data.city.name}`;

    } catch (error) {
        console.log(error);
    }
}

