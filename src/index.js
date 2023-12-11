

console.log("HI");

// function to add data to object weatherData object
function editWeatherData(localData, serverDataLocation, serverDataCurrent) {
    localData.name = serverDataLocation.name;
    if(serverDataCurrent.is_day == 1){
        localData.dayTime = true;
    }else{
        localData.dayTime = false;
    }
    localData.temp_C = serverDataCurrent.temp_c;
    localData.temp_F = serverDataCurrent.temp_f;
    console.log(serverDataCurrent.condition);
    localData.condition = serverDataCurrent.condition;
    localData.feelsLike_C = serverDataCurrent.feelslike_c;
    localData.feelsLike_F = serverDataCurrent.feelslike_f;
    localData.humidity = serverDataCurrent.humidity;
    localData.windDegree = serverDataCurrent.wind_degree;
    localData.wind_kph = serverDataCurrent.wind_kph;
    localData.localTime = serverDataLocation.localtime;
    console.log(localData);
}

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
    localTime: ''
}

// function to retrieve weather data from API
async function loadData(name, data){
    const apiAddress = `http://api.weatherapi.com/v1/current.json?key=a8c47c71d28f40beb51203912230712&q=${name}&aqi=no`
    const response = await fetch(apiAddress, {mode: 'cors'});
    response.json().then(function (response) {
        console.log(response);
        editWeatherData(data, response.location, response.current);
        
    })
}

// Load Page Content
console.log(weatherData);

// loadData();
loadData("London", weatherData);
console.log("Hello");