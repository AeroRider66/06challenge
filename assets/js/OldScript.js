// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'
const apiKey = '{{27b2d129fc17682d877658d7176b8532}};'

//  27b2d129fc17682d877658d7176b8532

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

// https://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=27b2d129fc17682d877658d7176b8532&units=imperial&cnt=24



const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'imperial'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";

//to get weather for a given city
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



function createWeatherDescription(weatherData) {

    const description = document.createElement("div");
    const convertedDateAndTime = convertToLocalTime(weatherData.dt);

    // '2023-11-07 07:00:00 PM'
    description.innerHTML = `
        <div class = "weather_description">${weatherData.main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
    `;
    return description;
}

// Use your own OpenWeatherMap API Key below
// const apiKey = '{{OpenWeatherMap_API_KEY_HERE}};'
const apiKey = '27b2d129fc17682d877658d7176b8532'

//  27b2d129fc17682d877658d7176b8532

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

// https://api.openweathermap.org/data/2.5/forecast?q=whyAmIHere&appid=27b2d129fc17682d877658d7176b8532&units=imperial&cnt=24

document.querySelector('button').addEventListener('click', renderWeather)


const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");

const doesCityExist = (obj, value) => {
    return Object.values(obj).includes(value);
};
if(doesCityExist)
    const error = document.getElementById('error');

const units = 'imperial'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";


function createWeatherDescription(weatherData) {
    const description = document.createElement("div");

    const convertedDateAndTime = convertToLocalTime(weatherData.dt);

    description.innerHTML = `
        <div class = "weather_description">${weatherData.main.temp}${temperatureSymobol} - ${convertedDateAndTime.substring(10)} - ${convertedDateAndTime.substring(5, 10)} </div>
    `;
    return description;
}

function renderWeather () {
    // get city (cityInput) from the DOM  - ? bring in using the id= input from HTML


    // call fetch weather with the city name
    // receive data (city)
    // render to DOM
    //
}
//=============================================
// // date = data.list.dt (need to pull in first value, figure out how to pick future values, then convert from Unix time to local (and maybe locale?) time
// const unixTimestamp = 1622771526;
// const date = new Date(unixTimestamp * 1000);
// const timeString = date.toLocaleString();
// console.log(timeString);
//===========================================

/**
 * takes city name
 * returns weather data for city (all data from API
 */
async function fetchWeather(city) {
    try {
        const myCity = "Dallas"
        const cnt = 10;

        // how to break this into the daily units?
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&appid=${apiKey}&units=${units}&cnt=${cnt}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        //Display error if user types invalid city or no city
        if (data.cod == '400' || data.cod == '404') {
            console.error(data.cod, data.message);
            return [] ;
        }
        return data.list;

    } catch (error) {
        console.log(error);
    }
}


// TODO need to decide what to call that list of JSON values
function renderWeather(weatherData) {
    // loop to render to find date and to extract data
    for (const weatherItem of weatherData) {
        const
            }
    // TODO need to pick out the values of the JSON data to be used:
    // how to pick the times from each day that are needed.  Use the 'date.xxx method (maybe on the 'dt' value from each JSON item
    // TODO as each date/time is selected as one that we want, then will need to pick the values from that specific date/time:
    // TODO


    // render to DOM
    //
//}

    const weatherContainer = document.getElementById("weather");

    const doesCityExist = (obj, value) => {
        return Object.values(obj).includes(value);
    };
    if (doesCityExist)
        const error = document.getElementById('error');

    const units = 'imperial'; //can be imperial or metric
    let temperatureSymobol = units == 'imperial' ? "°F" : "°C";
}



// I don't think we would have to convert from UNIX time, because we have
// "dt_txt": "2024-08-22 03:00:00"
// provided for each JSON response.   UNLESS it's easier to take UNIX time directly into the locale date/time.
// The time is parsed into 3 hour increments on the 0,3,6,9 hour marks.
// The first API JSON response uses the NEXT 3's time (i.e. if it's currently 0200, the data passed will be for 0300)

// Regardless of which way we go, we will need to convert the "dt_txt" value from UTC into local time OR the "dt" UNIX time to locale time.
//I'm a little unsure of the formating and the dateToString and timeToString methods


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




// ============================================================
// I don't think we would have to convert from UNIX time, because we have
// "dt_txt": "2024-08-22 03:00:00"
// provided for each JSON response.   UNLESS it's easier to take UNIX time directly into the locale date/time.
// The time is parsed into 3 hour increments on the 0,3,6,9 hour marks.
// The first API JSON response uses the NEXT 3's time (i.e. if it's currently 0200, the data passed will be for 0300)

// Regardless of which way we go, we will need to convert the "dt_txt" value from UTC into local time OR the "dt" UNIX time to locale time.
//I'm a little unsure of the formating and the dateToString and timeToString methods




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
