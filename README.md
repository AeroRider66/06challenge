# 06challenge


## User story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## project 6 notes for requirements and how I will do those.

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city



will need to grab city data from json from API

================================

1, display the landing page.
2. take the user city input 
    a. how to check validity?
3.  b. will need it be checked against the JSON response because that is the 'source data' that the input will have match.
3. pass city input to function or part of function where we parse down the JSON information into the following:
    a. city name - simple text display -
    b. date - how to get?
       (try and parse it our from the dt_txt obj in API response)
        OR
       (decode from unix time? (read from the dt object))
    c. temperature
    d. humidity
    e. wind speed
   

