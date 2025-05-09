



const apikey="ff55dae5f148614ed4af787eff74b988";

const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather-icon")
const weatherContainer =document.querySelector(".weather")
const Error =document.querySelector(".error")



async function checkWeather(city) {
    const response =await fetch(apiUrl + city + `&appid=${apikey}`)
    if(response.status == 404 ){
        Error.style.display="block"
        weatherContainer.style.display="none"
    }
    else{
        var data = await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML=data.name
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + " °C"
        document.querySelector(".humidity").innerHTML=data.main.humidity + " %"
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h"
    
    
    if(data.weather[0].main =="CloudS"){
        weatherIcon.src="assets/img/clouds.webp"
    }
    else if(data.weather[0].main == "Clear"){
    weatherIcon.src ="assets/img/clear.webp"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="assets/img/rain.webp"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="assets/img/mist.webp"
            }
    }

    }
searchbtn.addEventListener("click",()=>{
    
    checkWeather(searchBox.value);
    weatherContainer.style.display="block"
})


