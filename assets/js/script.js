//  api key === 27b2d129fc17682d877658d7176b8532

//====================================
// this no shit works!!!!
// https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=27b2d129fc17682d877658d7176b8532
// ===================================

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
const cityHistory = [];


document.querySelector('button').addEventListener('click', handleSubmit)

async function handleSubmit() {
    // get city from input
    const cityName = cityNameInput.value

    // TODO validate city?
    await loadWeather(cityName)
}

async function handleHistoryButton(cityName) {
    await loadWeather(cityName)
}

async function loadWeather(cityName) {
    // fetch data (fetchData func)
    const data = await fetchWeather(cityName)

    renderWeather(data, cityName)
}
    // save city name and refresh on button selection
    // render buttons
// ==================================

// initialize first run with cityLoop.length = 0, but must keep the
// running list of last 5 cities.
//
// cityLoop is array with names of the last 5 (or less) cities
// check current length of cityLoop.
// if less than 5, then append new city to the cityLoop array
// If greater than 5 then do a shift(remove earliest from array)
// and push(add to end of array)
//
// Somehow update a variable to show new length of cityLoop array
// to allow for comparison next time through.
//
// render last 5 (or less) cities as buttons available to do a
// new search on (the only thing to hold is the name - a new forecast
// will be done when the button is selected)

// ==================================
//
//     // do I need to put it as .value?
//     let citySave = cityNameInput.value;
//
//     if(cityLoop.length > 5) {
//         appendToCityLoop(citySave)
//     }
//
//     if(cityLoop.length < 5) => {
//
// }
//     function startCityArray (citySave) {
//
//     }
//=====================================
//     if(newCitySaveLength.length < 5) {
//
//         let cityLoop = new Array(5);
//         for (i = 0; i < 4; i++) {
//             cityLoop.push(citySave);
//         }
//
//     else {
//             cityLoop.shift();
//             cityLoop.push(citySave);
//         }
//     }
//
//     if (i > 4) {
//         cityLoop.shift();
//
//     };
//     for(i = 0; i > 4; i++) {}
//
//         if (cityLoop[i])
//==============================================

// ==================================
    // future check for dupe


// TODO receive data (city) for this function (this will be the full list of the JSON data received (all 24 of them).

// TODO need to decide what to call that list of JSON values

// TODO need to pick out the values of the JSON data to be used:

// TODO as each date/time is selected as one that we want, then will need to pick the values from that specific date/time:

function getHoursFromUnixTime(dt) {
    const date = new Date(dt * 1000)
    return (date.getUTCHours());
}

function renderWeather(weatherData, cityName) {
    weatherContainer.innerHTML = '';
// City name (from cityName) - debug point
    // console.log(cityName);

    if (getHoursFromUnixTime(weatherData[0].dt) > 12) {
        renderWeatherItem(weatherData[0])
    }

    for (const item of weatherData) {
        if (getHoursFromUnixTime(item.dt) !== 12) continue;
        renderWeatherItem(item);
    }
}

function renderWeatherItem(item) {
    const dayWeatherDiv = document.createElement('div');
    dayWeatherDiv.classList.add('day-weather');
    weatherContainer.append(dayWeatherDiv);

    const weatherTemp = Math.round(item.main.temp);
    const weatherHumidity = item.main.humidity;
    const weatherWind = Math.round(item.wind.speed);
    const weatherType = item.weather[0].main;

    const displayWeatherParameters = ["Temperature", "Humidity", "Wind-speed"];
    const displayWeatherData = [weatherTemp, weatherHumidity, weatherWind];

    // create div for day name i.e Monday
    const dayNameDiv = document.createElement('div');
    dayNameDiv.classList.add('day-name');
    dayNameDiv.innerText = new Date(item.dt * 1000).toLocaleDateString('en-us',{ weekday: 'long' });
    dayWeatherDiv.append(dayNameDiv);

    // create div for day icon
    const dayIconDiv = document.createElement('div');
    dayIconDiv.classList.add('day-icon');
    // identify weather icon from weather type
    if (weatherTypeImages[weatherType]) {
        const img = document.createElement('img');
        img.src = `./assets/images/${weatherTypeImages[weatherType]}`
        dayIconDiv.append(img);
    } else {
        // Handle Unrecognised
    }
    dayWeatherDiv.append(dayIconDiv);

//     <div className="day-data">
//         <table>
//             <tbody>
//             <tr>
//                 <th>temperature</th>
//                 <td>95&deg;</td>
//             </tr>
//             <tr>
//                 <th>humidity</th>
//                 <td>75%</td>
//             </tr>
//             <tr>
//                 <th>Wind speed</th>
//                 <td>1000</td>
//             </tr>
//             </tbody>
//         </table>
//     </div>

    // create div for day data
    const dayDataDiv = document.createElement('div');
    dayDataDiv.classList.add('day-data');
    dayWeatherDiv.append(dayDataDiv);

    // build weather table
    const dataTable = document.createElement('table');
    dayDataDiv.append(dataTable);
    const tbody = document.createElement('tbody');
    dataTable.append(tbody);

    // const displayWeatherParameters = ["Temperature", "Humidity", "Wind-speed"];
    // const displayWeatherData = [weatherTemp, weatherHumidity, weatherWind];

    for(let i = 0 ; i < 3 ; i++) {
        const tr_row = document.createElement('tr');

        const th_weatherParameters = document.createElement('th');
        const td_weatherData = document.createElement('td');

        th_weatherParameters.innerText = displayWeatherParameters[i];
        //console.log("word parameter", th_weatherParameters);
        tr_row.append(th_weatherParameters);

        td_weatherData.innerText = displayWeatherData[i];
        //console.log("data parameter", td_weatherData);
        tr_row.append(td_weatherData);

        console.log("row info for cycle", tr_row);

        tbody.append(tr_row);
        console.log("tbody info", tbody);
    }

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
