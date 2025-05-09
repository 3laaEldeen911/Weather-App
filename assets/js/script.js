



const apikey="ff55dae5f148614ed4af787eff74b988";

const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
const weatherContainer =document.querySelector(".weather")
const Error =document.querySelector(".error")
const loader = document.querySelector(".loader");



async function checkWeather(city) {

    loader.style.display = "block"; 
    weatherContainer.style.display = "none";
    Error.style.display = "none";
    const response =await fetch(apiUrl + city + `&appid=${apikey}`)
    loader.style.display = "none";
    if(response.status == 404 ){
        Error.style.display="block"
        weatherContainer.style.display="none"
        setTimeout(() => {
            Error.style.display = "none";
        }, 3000);
    }
    else{
        var data = await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + " °C"
        document.querySelector(".humidity").innerHTML=data.main.humidity + " %"
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h"
    
    
    if(data.weather[0].main === "Clouds" ){
    weatherIcon.src="assets/img/clouds.webp"
    }
    else if(data.weather[0].main === "Clear" ){
    weatherIcon.src ="assets/img/clear.webp"
    }
    else if(data.weather[0].main === "Rain" ){
        weatherIcon.src ="assets/img/rain.webp"
    }
    else if(data.weather[0].main === "Mist" ){
            weatherIcon.src ="assets/img/mist.webp"
    }
    else if(data.weather[0].main === "Snow" ){
        weatherIcon.src ="assets/img/snow.webp"
}
    else if(data.weather[0].main === "Drizzle" ){
        weatherIcon.src ="assets/img/drizzle.webp"
    }
    weatherContainer.style.display="block"
    }    
    }


    function handleSearch() {
        checkWeather(searchBox.value);
    }
    
    searchbtn.addEventListener("click", handleSearch);
    
    searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
