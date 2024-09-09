# Challenge 06 Server-Side APIs

## Startup
Access web page via URL https://aerorider66.github.io/06challenge/

## Use and Function
This app is designed to provide a 5-day weather forecast for the city of their choice. Once the desired city is input, the app will present the weather type, temperature, humidity, and wind=speed. 

## User Interface
Upon access the user will be provided a page divided into 2 sides.  There will be an input box and a 'Submit' button on the left side.  Upon first visit, the right side will contain no information. 
When the user provides a city in the box, and presses the 'Submit' button, a new button will be created directly under the city input box.  This new button will contain the name of the city that was input.
The right side of the page will update and display the weather forecast for the next 5 days for the input city.
The user may enter another city to search in the input field, and the 5-day forecast will update with the new city.  
Additionally, for each city searched, a new button will be added below the input box as it was with the first one.  Clicking one of the those buttons will repopulate the weather for that city, updated at the time of the button push.  


## Application Internal Operations

The operation of the code in the app, is centric around only 2 provided parameters, and a single API key URL.
The 2 parameters are the city name provided by the user, and a weather 'container'.
The operation is centric around the input city (user input), the API response from https://openweathermap.org, and the parsing of the information provided by this app.


## Internal Functionality

Upon load of page the user input field is presented to allow input of the target city.  That city name is used to create the required API request for data.  When combined with the developer's API key, a unique URL is created and sent to the API.  The app will wait for a response from the server API.  This response will provide a JSON compliant dataset that contains a large amount of weather information for use.  Once received, the main use goes on to the fetch weather function, but the city name is also passed over to the history functionality.

The fetch weather function creates the API URL, and sends it to the openweather API, then awaits the response.  The response contains the full dataset response, most of which we do not use, but we send the full set on.  The render weather function takes in the full dataset, which contains the weather forecast in 3 hour increments for all 5 days.  It will pick the 1200pm time (Using the getHoursFromUnixTime function) to pick only one time per day.

Once selected the datasets are passed to the renderWeatherItem function, which will pick out the weather type(clear, cloudy, etc.) the temperature, the humidity and the wind-speed. Values are rounded for readability.  Once values are extracted, they will be rendered on the web page in left column (user input, submit button, historical city buttons) or the right column (list of weather by day with icon showing weather type, and values given for temperature, humidity, and wind-speed).


## Repository and Site

### URL
Web page hosted by Github via URL https://aerorider66.github.io/06challenge/

### Repository
Repository location is https://github.com/AeroRider66/06challenge

   

