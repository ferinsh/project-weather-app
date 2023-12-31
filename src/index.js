//import loadData from "./loadWeatherData.js";
import css from "../src/style.css";
import loadPageContent from "./loadPageContent.js";

const weatherData = {
    condition: '',
    name: '',
    dayTime: true,
    temp_C: '',
    temp_F: '',
    feelsLike_C: '',
    feelsLike_F: '',
    humidity: '',
    windDegree: '',
    wind_kph: '',
    localTime: '',
    isCelcius: true
}

// Load Page Content
loadPageContent("Bangalore", weatherData);
//console.log(weatherData);

// loadData() - function to load weather data into weatherData object.

const bgVid = document.getElementById("bgVid");
bgVid.innerHTML = weatherData
