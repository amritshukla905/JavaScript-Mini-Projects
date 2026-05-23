const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const discription = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const API_KEY = "b54d2153b57a47c991e211536262305";

searchBtn.addEventListener("click",()=>{ // as soon as the event of clicking happen execute the fn
    const city = cityInput.value;
    getweather(city);
});

async function getweather(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try{
        const response = await fetch(url);
        const data = await response.json(); // converting the reponce back to objects from json
        cityName.innerText = data.location.name;
        temperature.innerText = `${Math.round(data.current.temp_c)}°C`;
        description.innerText = data.current.condition.text;
        humidity.innerText = `${data.current.humidity}%`;
        wind.innerText = `${data.current.wind_kph}km/h`;
    }

    catch(error){
        alert("city not found");
    }
}