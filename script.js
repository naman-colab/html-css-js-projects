

const apiKey = "dc26f2089e09aa2e12a10309d147d589";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBtn=document.querySelector(".button");
const searchValue=document.getElementById("form1");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl} + ${city}+&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";

    document.querySelector(".wind").innerHTML=data.wind.speed;

    // sunrise time 
    const sunrise=data.sys.sunrise;
    const sunriseDate=new Date(sunrise*1000);
    const sunriseTime=sunriseDate.toLocaleTimeString();
    document.querySelector(".sunrise").innerHTML=sunriseTime;


   document.querySelector(".feel").innerHTML=data.weather[0].description;



}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchValue.value);
})

