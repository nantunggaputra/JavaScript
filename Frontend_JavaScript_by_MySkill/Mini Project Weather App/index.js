// city name declaration with DOM
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// weather declaration with DOM
const menu = document.querySelector(".weather");
const weather = document.querySelector(".weather-icon");
const city = document.querySelector(".city");
const temp = document.querySelector(".tempt");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

// API initiation
const UrlAPI = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const keyAPI = "9731f29d3257cec279a800e494b516cc";

// async function
async function checkWeather(inputCityName) {
	const response = await fetch(UrlAPI + inputCityName + `&appid=${keyAPI}`);
	let data = await response.json();
	// console.log(data);
	setTimeout(() => {
		if (!response.ok) {
			weather.src = "./weather/umbrella.svg";
			data.name = "Unknown Place / Not a City";
			city.innerHTML = data.name;
			alert("Invalid City Name" + `\n` + "You entered the wrong city name unfortunately. Please try again.");
		} else {
			if (data.weather[0].main == "Clear") {
				weather.src = "./weather/sun.svg";
			} else if (data.weather[0].main == "Snow") {
				weather.src = "./weather/cloud-snow.svg";
			} else if (data.weather[0].main == "Rain") {
				weather.src = "./weather/cloud-rain.svg";
			} else if (data.weather[0].main == "Drizzle") {
				weather.src = "./weather/cloud-drizzle.svg";
			} else {
				weather.src = "./weather/cloud.svg";
			}
			city.innerHTML = data.name;
			temp.innerHTML = Math.round(data.main.temp) + "°C";
			humidity.innerHTML = data.main.humidity + "%";
			wind.innerHTML = data.wind.speed + " km/h";
		}
	}, 500);
}

// call function
searchBtn.addEventListener("click", () => {
	menu.style.display = "block";
	if (searchBox.value === "") {
		return;
	}
	city.innerHTML = "Searching";
	temp.innerHTML = "0°C";
	humidity.innerHTML = "0%";
	wind.innerHTML = "0.00 km/h";
	checkWeather(searchBox.value);
});

// keyboard accessibility logic
window.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		clickSearch();
	}
});

// keyboard accessibility function
function clickSearch() {
	searchBtn.click();
}
