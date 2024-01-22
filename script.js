const apikey = "d6deacdba28a7a1cd4a1590087c397ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector('.search-field');
const temperature = document.querySelector('.temperature');
const city_name2 = document.querySelector('.city-name');
const humidity_value = document.querySelector('.humidity-value');
const wind_value = document.querySelector('.wind-speed-value');
const weather_img = document.querySelector('.weather-img');
const search_btn = document.querySelector('.search-icon');
const weather_condition = document.querySelector('.weather-condition');

async function checkWeather(city_name){

    if(!city_name){
        return;
    }
    const response = await fetch(apiUrl + city_name + `&appid=${apikey}`);
    const data = await response.json();

    city_name2.innerHTML = data.name;
    weather_condition.innerHTML = data.weather[0].main;
    temperature.innerHTML = Math.floor(data.main.temp)+1;

    humidity_value.innerHTML = data.main.humidity;
    wind_value.innerHTML = data.wind.speed;

    if(data.weather[0].main == "Clear"){
        weather_img.src = "https://th.bing.com/th/id/R.84035fbe076a5fe3ad3526ae4f436ec9?rik=0J9o40oTothDbA&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fios-weather-icons-53.png&ehk=ScSR9K9vGN0dypKdOOIEGTi4NW3J2hWfPaLZSpTYJf0%3d&risl=&pid=ImgRaw&r=0";
    }

    else if(data.weather[0].main == "Clouds"){
        weather_img.src = "https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Partly_Cloudy_Cloudy_Sun_Cloud_Nebulosity_Apple_Weather-1024.png";
    }

    else if(data.weather[0].main == "Fog"){
        weather_img.src = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-06-512.png";
    }

     else if(data.weather[0].main == "Mist"){
        weather_img.src = "https://cdn3.iconfinder.com/data/icons/wheater-1/512/wheater_20-1024.png";
    }
    else if(data.weather[0].main == "Smoke"){
        weather_img.src = "https://cdn4.iconfinder.com/data/icons/weather-708/64/45_fog_cloud_weather_smoke_smog_transparent_wintry-1024.png";
    }
    
    else if(data.weather[0].main == "Rain"){
        weather_img.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png";
    }
}

search_btn.addEventListener('click',() => {
    checkWeather(search.value);
})
