import loadData from "./loadWeatherData";

export default function loadPageContent(name, data){
    loadData(name, data);
    console.log("Loaded page content");
    
    //get pageHolder from DOM
    const pageHolder = document.getElementById("pageHolder");
    createPageLayout(data, pageHolder);

    const btnSubmitLoc = document.getElementById("locationSubmitButton");
    const locationNameField = document.getElementById("locationInputField");
    const btnChangeUnit = document.getElementById("buttonUnitChange");

    btnSubmitLoc.addEventListener("click",() => {
        console.log(locationNameField.value);
        loadData(locationNameField.value, data);
    });

    btnChangeUnit.addEventListener("click",() => {
        const tempReading = document.getElementById("tempDispLeft");
        const tempReadingUnit = document.getElementById("tempDispUnit");
        const tempDispFeelsLike = document.getElementById("tempDispFeelsLike");
        if(data.isCelcius){
            console.log(data.isCelcius);
            tempReading.innerHTML = data.temp_F;
            tempReadingUnit.innerHTML = "FAHRENHEIT";
            tempDispFeelsLike.innerHTML = data.feelsLike_F;
            data.isCelcius = false;
        }else{
            console.log(data.isCelcius);
            tempReading.innerHTML = data.temp_C;
            tempReadingUnit.innerHTML = "CELCIUS";
            tempDispFeelsLike.innerHTML = data.feelsLike_C;
            data.isCelcius = true;
        }
    });
    
    console.log(data);
}

function createPageLayout(data, holder){
    //append two divisions to pageHolder - divisionTop and divisionBottom
    const divisionTop = document.createElement("div");
    divisionTop.id = "divisionTop";

    const divisionBottom = document.createElement("div");
    divisionBottom.id = "divisionBottom";

    holder.appendChild(divisionTop);
    holder.appendChild(divisionBottom);

    //append two divisions to divisionTop - divLeft and divRight
    const divLeft = document.createElement("div");
    divLeft.id = "divLeft";

    const divRight = document.createElement("div");
    divRight.id = "divRight";

    divisionTop.appendChild(divLeft);
    divisionTop.appendChild(divRight);

    const detailsHolderLeft = document.createElement("div");
    detailsHolderLeft.classList.add("details-holder-left");
    detailsHolderLeft.id = "detailsHolderLeft";

    divLeft.appendChild(detailsHolderLeft);

    const conditionDisp = document.createElement("p");
    conditionDisp.id = "conditionDisplay";
    const nameDisp = document.createElement("h1");
    nameDisp.id = "nameDisplay";

    const tempDisp = document.createElement("div");
    tempDisp.id = "tempDisp";

    createTempDisp(tempDisp);
    
    const buttonUnitChange = document.createElement("button");
    buttonUnitChange.id = "buttonUnitChange";



    detailsHolderLeft.appendChild(conditionDisp);
    detailsHolderLeft.appendChild(nameDisp);
    detailsHolderLeft.appendChild(tempDisp);
    detailsHolderLeft.appendChild(buttonUnitChange);
    
    buttonUnitChange.textContent = "Change Unit";

    //divisionBottom creation
    const searchBar = document.createElement('div');
    searchBar.id = 'searchBar';

    divisionBottom.appendChild(searchBar);

    const inputField = document.createElement('input');
    const btnSubmit = document.createElement('button');

    inputField.type = 'text';
    inputField.id = 'locationInputField';
    inputField.placeholder = 'Location';

    btnSubmit.id = 'locationSubmitButton';
    btnSubmit.innerText = 'Submit';

    searchBar.appendChild(inputField);
    searchBar.appendChild(btnSubmit);
}


function createTempDisp(disp) {
    const left = document.createElement('div');
    left.id = 'tempDispLeft';

    const right = document.createElement('div');
    right.id = 'tempDispRight';

    const rightOne = document.createElement('div');
    const rightTwo = document.createElement('div');
    const rightThree = document.createElement('div');

    rightOne.classList.add('temp-disp-right-element');
    rightTwo.classList.add('temp-disp-right-element');
    rightThree.classList.add('temp-disp-right-element');

    rightOne.id = 'tempDispUnit';
    rightTwo.id = 'tempDispFeelsLike';
    rightThree.id = 'tempDispHumidity';

    right.appendChild(rightOne);
    right.appendChild(rightTwo);
    right.appendChild(rightThree);
    
    disp.appendChild(left);
    disp.appendChild(right);
}