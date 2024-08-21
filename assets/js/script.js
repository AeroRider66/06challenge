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
