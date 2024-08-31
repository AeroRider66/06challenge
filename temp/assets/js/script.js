<<<<<<< HEAD
=======
// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'
const apiKey = '27b2d129fc17682d877658d7176b8532'

>>>>>>> 75717210db0b989f90606a11d1fe6f57269c5bda
//  27b2d129fc17682d877658d7176b8532

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

// https://api.openweathermap.org/data/2.5/forecast?q=whyAmIHere&appid=27b2d129fc17682d877658d7176b8532&units=imperial&cnt=24

<<<<<<< HEAD
const apiKey = '27b2d129fc17682d877658d7176b8532'

// for debug so can adjust count to get 5 days
const cnt = 40;
=======
// ???
document.querySelector('button').addEventListener('click', renderWeather())

// I think it should call fetchWeather on click, but I can't figure out how to capture the cityName
document.querySelector('button').addEventListener('click', catchCityName(cityName))

fetchWeather(cityName);

// ==============================================================

function catchCityName(cityInput) {
    let cityName = document.getElementById("cityInput").value;
}

// ========================================================================
>>>>>>> 75717210db0b989f90606a11d1fe6f57269c5bda

const cityNameInput = document.getElementById("cityName")
const weatherContainer = document.getElementById("weather");
<<<<<<< HEAD

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

// =============================================================================
// I don't think we would have to convert from UNIX time, because we have
// "dt_txt": "2024-08-22 03:00:00"
// provided for each JSON response.   UNLESS it's easier to take UNIX time directly into the locale date/time.
// The time is parsed into 3 hour increments on the 0,3,6,9 hour marks.
// The first API JSON response uses the NEXT 3's time (i.e. if it's currently 0200, the data passed will be for 0300)

// Regardless of which way we go, we will need to convert the "dt_txt" value from UTC into local time OR the "dt" UNIX time to locale time.  
//I'm a little unsure of the formating and the dateToString and timeToString methods 

//===========================================================
// may not be needed since the JSON already contains a field that says that there is no city if that happens
// const doesCityExist = (obj, value) => {
//     return Object.values(obj).includes(value);
// };





// LIKELY DON"T NEED THIS
// ================================
// function convertTimeDate() {

//     // pull from openweather json response
//     let unixTimestamp = 1111111;

//     // Convert to milliseconds and
//     // then create a new Date object
//     let dateObj = new Date(unixTimestamp * 1000);
//     let utcString = dateObj.toUTCString();

//     let time = utcString.slice(-11, -4);

//     console.log(time);
// }
// convertTimestamptoTime();
//  ========================================


// //to get weather for a given city

// async function fetchWeather() {
//     try {
//         weatherContainer.innerHTML = '';
//         error.innerHTML = '';
//         city.innerHTML = '';
//
//
//         const cnt = 10;
//         const cityInputtedByUser = document.getElementById('cityInput').value;
//
//         // how to break this into the daily units?
//         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;
//
//
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//
//         //Display error if user types invalid city or no city
//         if (data.cod == '400' || data.cod == '404') {
//             error.innerHTML = `Not valid city. Please input another city`;
//             return;
//         }
//         //Display weather data for each 3 hour increment
//         data.list.forEach(dailyWeatherData => {
//             const dailyWeatherDataDiv = createWeatherDescription(dailyWeatherData);
//             weatherContainer.appendChild(dailyWeatherDataDiv);
//         });
//
//         // Display city name based on latitude and longitude
//         city.innerHTML = `Daily Weather for ${data.city.name}`;
//
//     } catch (error) {
//         console.log(error);
//     }
// }

>>>>>>> 75717210db0b989f90606a11d1fe6f57269c5bda
