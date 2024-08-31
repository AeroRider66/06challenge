
// Use your own OpenWeatherMap API Key below

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

const apiKey = '27b2d129fc17682d877658d7176b8532'

// for debug so can adjust count to get 5 days
const cnt = 40;

document.querySelector('button').addEventListener('click', renderWeather())

// I think it should call fetchWeather on click, but I can't figure out how to capture the cityName
document.querySelector('button').addEventListener('click', catchCityName(cityName))

fetchWeather(cityName);

// ==============================================================

function catchCityName(cityInput) {
    let cityName = document.getElementById("cityInput").value;
}

const cityNameInput = document.getElementById("cityName")
const weatherContainer = document.getElementById("weather");

const weatherTypeImages = {
    'Clouds': 'clouds.png',
    'Rain': 'rain.png',
    'Clear': 'clear.png'
};

document.querySelector('button').addEventListener('click', handleSubmit)

async function handleSubmit() {
    // get city from input
    const cityName = cityNameInput.value

    // TODO validate city?

    // fetch data (fetchData func)
    const data = await fetchWeather(cityName)

    renderWeather(data, cityName)
}


// TODO receive data (city) for this function (this will be the full list of the JSON data received (all 24 of them).

// TODO need to decide what to call that list of JSON values

    // TODO need to pick out the values of the JSON data to be used:
    // how to pick the times from each day that are needed.  Use the 'date.xxx method (maybe on the 'dt' value from each JSON item
    // TODO as each date/time is selected as one that we want, then will need to pick the values from that specific date/time:
    // TODO

function getHoursFromUnixTime (dt) {
    const date = new Date(dt * 1000)
    return (date.getUTCHours());
}

function renderWeather(weatherData, cityName) {

// City name (from cityName) - debug point
    console.log(cityName);

    if(getHoursFromUnixTime(weatherData[0].dt) > 12) {
        renderWeatherItem(weatherData[0])
    }

    for (const item of weatherData) {
        if (getHoursFromUnixTime(item.dt) !== 12) continue;
        renderWeatherItem(item);
    }
}

function renderWeatherItem(item) {
// weather icon = data.list.weather.main
const div = document.createElement('div');
    const weatherTemp = item.main.temp;
    const weatherHumidity = item.main.humidity;
    const weatherWind = item.wind.speed;
    const weatherType = item.weather[0].main;
console.log(item);
    if (weatherTypeImages[weatherType]) {
        const img = document.createElement('img');
        img.src = `./assets/images/${weatherTypeImages[weatherType]}`
        div.append(img)
    } else {
        // Handle Unrecognised
    }
    weatherContainer.append(div);
}


async function fetchWeather(cityName) {
    try {

        // how to break this into the daily units?
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial&cnt=${cnt}`;
=======
const city = document.getElementById("city");


// if(doesCityExist)
// const error = document.getElementById('error');
// do we really need this?  The JSON file has a message field that says city not found

const units = 'imperial'; //can be imperial or metric
let temperatureSymbol = units == 'imperial' ? "°F" : "°C";


function createWeatherDescription(weatherData) {
    const description = document.createElement("div");

    const convertedDateAndTime = convertToLocalTime(weatherData.dt);

    description.innerHTML = `
        <div class = "weather_description">${weatherData.main.temp}${temperatureSymbol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
    `;
    return description;
}

/**==================================================================
 * takes city name
 * returns weather data for city (all data from API
 */
async function fetchWeather(city) {
    try {
        const cnt = 10;

        // how to break this into the daily units?
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&appid=${apiKey}&units=${units}&cnt=${cnt}`;
>>>>>>> 75717210db0b989f90606a11d1fe6f57269c5bda

        const response = await fetch(apiUrl);
        const data = await response.json();

        //Display error if user types invalid city or no city
        if (data.cod == '400' || data.cod == '404') {
            console.error(data.cod, data.message);
<<<<<<< HEAD
            return [];
        }
=======
            return [] ;
        }

        const weatherHighTemp = d


>>>>>>> 75717210db0b989f90606a11d1fe6f57269c5bda
        return data.list;

    } catch (error) {
        console.log(error);
    }
}
<<<<<<< HEAD
=======
// ====================================================================

function renderWeather () {
    // get city (cityInput) from the DOM  - ? bring in using the id= input from HTML


    // call fetch weather with the city name

    fetchWeather(city);

    console.log("City Name", city);
    // receive data (city) - this does not come from the JSON
    // render to DOM
    //
}
//  27b2d129fc17682d877658d7176b8532

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

// https://api.openweathermap.org/data/2.5/forecast?q=whyAmIHere&appid=27b2d129fc17682d877658d7176b8532&units=imperial&cnt=24

    const apiKey = '27b2d129fc17682d877658d7176b8532'

// for debug so can adjust count to get 5 days
    const cnt = 40;

    const cityNameInput = document.getElementById("cityName")
    const weatherContainer = document.getElementById("weather");

    const weatherTypeImages = {
        'Clouds': 'clouds.png',
        'Rain': 'rain.png',
        'Clear': 'clear.png'
    };


    document.querySelector('button').addEventListener('click', handleSubmit)

    async function handleSubmit() {
        // get city from input
        const cityName = cityNameInput.value

        // TODO validate city?

        // fetch data (fetchData func)
        const data = await fetchWeather(cityName)

        renderWeather(data, cityName)


    }

// TODO receive data (city) for this function (this will be the full list of the JSON data received (all 24 of them).

// TODO need to decide what to call that list of JSON values


    // TODO need to pick out the values of the JSON data to be used:
    // how to pick the times from each day that are needed.  Use the 'date.xxx method (maybe on the 'dt' value from each JSON item
    // TODO as each date/time is selected as one that we want, then will need to pick the values from that specific date/time:
    // TODO

    function renderWeather(weatherData, cityName) {

// City name (from cityName) - debug point
        console.log(cityName);

        // TODO how to find the starting point and the diff between now and the first time a 12 goes around.

        for (const item of weatherData) {
            const date = new Date(item.dt * 1000)
            if (date.getUTCHours() !== 12) continue;
            renderWeatherItem(item);
        }
    }

    function renderWeatherItem(item) {
// weather icon = data.list.weather.main
        const div = document.createElement('div');
        const weatherTemp = item.main.temp;
        const weatherHumidity = item.main.humidity;
        const weatherWind = item.wind.speed;
        const weatherType = item.weather[0].main;
        console.log(item);
        if (weatherTypeImages[weatherType]) {
            const img = document.createElement('img');
            img.src = `./assets/images/${weatherTypeImages[weatherType]}`
            div.append(img)
        } else {
            // Handle Unrecognised
        }
        weatherContainer.append(div);
    }


    async function fetchWeather(cityName) {
        try {

            // how to break this into the daily units?
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial&cnt=${cnt}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            //Display error if user types invalid city or no city
            if (data.cod == '400' || data.cod == '404') {
                console.error(data.cod, data.message);
                return [];
            }
            return data.list;

        } catch (error) {
            console.log(error);
        }
    }

