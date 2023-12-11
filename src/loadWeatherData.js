export default async function loadData(name, data){
    const apiAddress = `https://api.weatherapi.com/v1/current.json?key=a8c47c71d28f40beb51203912230712&q=${name}&aqi=no`
    const response = await fetch(apiAddress, {mode: 'cors'});
    response.json().then(function (response) {
        //console.log(response);
        editWeatherData(data, response.location, response.current);
        const nameDisplay = document.getElementById('nameDisplay');
        const conditionDisplay = document.getElementById('conditionDisplay');
        const tempDisplayLeft = document.getElementById('tempDispLeft');
        const tempDispUnit = document.getElementById('tempDispUnit');
        const tempDispFeelsLike = document.getElementById('tempDispFeelsLike');
        const tempDispHumidity = document.getElementById('tempDispHumidity');
        
        console.log(nameDisplay);
        nameDisplay.innerHTML = data.name;
        conditionDisplay.innerHTML = data.condition.text;
        tempDisplayLeft.innerHTML = data.temp_C;
        tempDispUnit.innerHTML = "CELCIUS";
        tempDispFeelsLike.innerHTML = `Feels like ${data.feelsLike_C}`;
        tempDispHumidity.innerHTML = `Humidity: ${data.humidity}`;
    })
}

function editWeatherData(localData, serverDataLocation, serverDataCurrent) {
    localData.name = serverDataLocation.name;
    if(serverDataCurrent.is_day == 1){
        localData.dayTime = true;
    }else{
        localData.dayTime = false;
    }
    localData.temp_C = serverDataCurrent.temp_c;
    localData.temp_F = serverDataCurrent.temp_f;
    localData.condition = serverDataCurrent.condition;
    localData.feelsLike_C = serverDataCurrent.feelslike_c;
    localData.feelsLike_F = serverDataCurrent.feelslike_f;
    localData.humidity = serverDataCurrent.humidity;
    localData.windDegree = serverDataCurrent.wind_degree;
    localData.wind_kph = serverDataCurrent.wind_kph;
    localData.localTime = serverDataLocation.localtime;
    //console.log(localData);
}