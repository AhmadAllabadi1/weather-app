import './style.css';

const submitFormBtn = document.getElementById("submitFormBtn");
const form = document.getElementById('countryForm');
const countryInput = document.getElementById('countryInput');
const dataContainer = document.getElementById('dataContainer');
const temperatureDisplay = document.querySelector(".temperature")
const countryDisplay = document.querySelector(".country");
const conditionDisplay = document.querySelector(".conditions")
const conditionIconDisplay = document.querySelector(".conditionIcon");
const preciptationDisplay  = document.getElementById("preciptation");
const humidityDisplay = document.getElementById("humidity");
const windDisplay = document.getElementById("wind");
const pressureDisplay = document.getElementById("pressure");

function getData(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=fb0cfa046b114f48923141009231707&q=${location}`)
    .then((resp)=> resp.json())
    .then(editDOM)
}

function editDOM(data) {
    countryDisplay.innerHTML = `${data.location.country}, <br>  ${data.location.name}`;
    temperatureDisplay.innerHTML = `${data.current.temp_c}&deg;C`;
    conditionDisplay.innerHTML = `${data.current.condition.text}`;
    conditionIconDisplay.innerHTML = `<img src="${data.current.condition.icon}" class="iconImg">`
    humidityDisplay.innerHTML = `${data.current.humidity} %`;
    windDisplay.innerHTML = `${data.current.gust_kph} KPH`;
    preciptationDisplay.innerHTML=`${data.current.precip_mm} mm`;
    pressureDisplay.innerHTML  =`${data.current.pressure_mb} mb`;
}

getData('Doha');

submitFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const country = countryInput.value;
    getData(country)
})

