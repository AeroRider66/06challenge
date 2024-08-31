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
