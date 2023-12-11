console.log("HI");

const weatherData = {
    name: '',
    dayTime: true,
    temp_C: '',
    temp_F: '',
}

function editWeatherData(localData, serverDataLocation, serverDataCurrent) {
    localData.name = serverDataLocation.name;
    if(serverDataCurrent.is_day == 1){
        localData.dayTime = true;
    }else {
        localData.dayTime = false;
    }

    //weatherData.daytime = response.current.is_day;
    localData.temp_C = serverDataCurrent.temp_c;
    localData.temp_F = serverDataCurrent.temp_f;
    console.log(localData);
}

async function loadData(name){
    const apiAddress = `http://api.weatherapi.com/v1/current.json?key=a8c47c71d28f40beb51203912230712&q=${name}&aqi=no`
    console.log(apiAddress)
    const response = await fetch(apiAddress, {mode: 'cors'});
    response.json().then(function (response) {
        console.log(response)
        // weatherData.name = response.location.name;
        // if(response.current.is_day == 1){
        //     weatherData.dayTime = true;
        // }else {
        //     weatherData.dayTime = false;
        // }

        // //weatherData.daytime = response.current.is_day;
        // weatherData.temp_C = response.current.temp_c;
        // weatherData.temp_F = response.current.temp_f;
        // console.log(weatherData);
        editWeatherData(weatherData, response.location, response.current);
    })
}

function loadRegionData(){
    const nameRegion = prompt('Region name?');
    loadData(nameRegion);
}

//loadData();
loadRegionData();
