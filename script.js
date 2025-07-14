let searchInput = document.querySelector(".search");
let searchBtn = document.querySelector(".search-btn");
let temperatureElement = document.querySelector(".temperature").firstElementChild;
let imgWeather = document.getElementsByClassName("img-weather")[0];
let cityElement = document.querySelector(".city");
let humidityElement = document.querySelector(".humidity-val-element");
let windElement = document.querySelector(".wind-val-element");


async function getData(city = "manchester") {
    try {
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=99c975fda5cd1cffbf5e521a6aa3a34e`;
        let a = await fetch(URL);
        let response = await a.json();
        temperatureElement.innerHTML = response.main.temp;
        cityElement.innerHTML = city;
        windElement.innerHTML = response.wind.speed + " km/h";
        humidityElement.innerHTML = response.main.humidity + "%";
        if (response.weather[0].main == "Clouds") {
            imgWeather.src = "images/clouds.png";

        }
        else if (response.weather[0].main == "Clear") {
            imgWeather.src = "images/clear.png";

        }
        else if (response.weather[0].main == "Rain") {
            imgWeather.src = "images/rain.png";

        }
        else if (response.weather[0].main == "Drizzle") {
            imgWeather.src = "images/drizzle.png";

        }
        else if (response.weather[0].main == "Snow") {
            imgWeather.src = "images/snow.png";

        }
        else {
            imgWeather.src = "images/clear.png";

        }

    } catch (error) {
        console.log(error);
    }

}
getData("manchester");

searchBtn.addEventListener("click", () => {
    let searchValue = searchInput.value;
    if (searchValue != "") {
        getData(searchValue);
    }


})




