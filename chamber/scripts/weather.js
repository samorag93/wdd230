// const currentTemp = document.querySelector('#current-temp');
// const forecast = document.querySelector('#forecast-temp')
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');
// const windSpeed = document.querySelector('#windSpeed');
// const windChill = document.querySelector('#windChill');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.41&lon=-3.70&units=imperial&appid=11e47217061cf08187ac30206bdc7206';
// const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=40.4165&lon=-3.7026&appid=11e47217061cf08187ac30206bdc7206`;
// // const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.41&lon=-3.70&appid=11e47217061cf08187ac30206bdc7206'
// async function apiFetch() {
//   try {
//     const response = await fetch(`${url}`);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // testing only
//       displayResults(data); // uncomment when ready
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// apiFetch();

// function displayResults(data) {
//   currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
//   const weatherEvents = data.weather;
//   weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherEvents[0].icon}.png`);
//   weatherIcon.setAttribute('alt', weatherEvents[0].description);
//   captionDesc.textContent = `${capitalize(weatherEvents[0].description)}`;
  
//   const windSpeedKmh = data.wind.speed ;
//   windSpeed.textContent = `Wind Speed: ${item.wind.speed} km/h`;
// }

// function calculateWindChillFahrenheit(temperature, windSpeed) {
//     const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
//     return windChill;
//   }
  



//   const today = new Date();
//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);
//   const tomorrow2 = new Date();
//   tomorrow2.setDate(today.getDate() + 2);

//   fetch(url2)
//     .then(response => response.json())
//     .then(data => {
//       const forecast = document.getElementById('weather-forecast');
//       let html = '';

//       data.list.forEach(item => {
//         const date = new Date(item.dt * 1000);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

//         if (
//           (dayOfWeek === today.toLocaleString('en-US', { weekday: 'long' }) && date.getHours() >= 12) ||
//           dayOfWeek === tomorrow.toLocaleString('en-US', { weekday: 'long' }) ||
//           dayOfWeek === tomorrow2.toLocaleString('en-US', { weekday: 'long' })
//         ) {
//           const temperatureInFahrenheit = (item.main.temp_max - 273.15) * 9 / 5 + 32;
//           html += `<div>
//                     <h3>${dayOfWeek}, ${day}/${month}</h3>
//                     <p>Max Temperature: ${temperatureInFahrenheit.toFixed(1)}°F</p>
//                     <p>Min Temperature: ${(item.main.temp_min - 273.15) * 9 / 5 + 32}°F</p>
//                   </div>`;
//         }
//       });

//       forecast.innerHTML = html;
//     })
//     .catch(error => console.error('Error fetching weather data:', error));
// // const currentTempElement = document.querySelector('#current-temp');
// // const forecastElement = document.querySelector('#forecast-temp');
// // const windSpeedElement = document.querySelector('#windSpeed');
// // const windChillElement = document.querySelector('#windChill');
// // const weatherIconElement = document.querySelector('#weather-icon');
// // const captionDescElement = document.querySelector('figcaption');

// // const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.4165&lon=-3.7026&units=imperial&appid=11e47217061cf08187ac30206bdc7206';
// // const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.4165&lon=-3.7026&appid=11e47217061cf08187ac30206bdc7206';

// // // Función para realizar la solicitud de API del tiempo actual
// // async function fetchCurrentWeather() {
// //   try {
// //     const response = await fetch(currentWeatherUrl);
// //     if (response.ok) {
// //       const data = await response.json();
// //       displayCurrentWeather(data); // Muestra los datos de tiempo actual
// //     } else {
// //       throw Error(await response.text());
// //     }
// //   } catch (error) {
// //     console.error('Error fetching current weather data:', error);
// //   }
// // }

// // // Función para mostrar los datos de tiempo actual
// // function displayCurrentWeather(data) {
// //   currentTempElement.textContent = `${Math.round(data.main.temp)}°F`; // Temperatura actual
// //   const weatherEvents = data.weather;
// //   weatherIconElement.setAttribute('src', `https://openweathermap.org/img/w/${weatherEvents[0].icon}.png`); // Icono del tiempo
// //   weatherIconElement.setAttribute('alt', weatherEvents[0].description);
// //   captionDescElement.textContent = capitalize(weatherEvents[0].description); // Descripción del tiempo
// // }

// // // Función para realizar la solicitud de API de la previsión de 3 días
// // async function fetchWeatherForecast() {
// //   try {
// //     const response = await fetch(forecastUrl);
// //     if (response.ok) {
// //       const data = await response.json();
// //       displayWeatherForecast(data); // Muestra los datos de la previsión del tiempo
// //     } else {
// //       throw Error(await response.text());
// //     }
// //   } catch (error) {
// //     console.error('Error fetching weather forecast data:', error);
// //   }
// // }

// // // Función para mostrar los datos de la previsión del tiempo
// // function displayWeatherForecast(data) {
// //   // Filtrar los datos para obtener solo la previsión para los próximos tres días
// //   const forecastData = data.list.filter(item => {
// //     const currentDate = new Date();
// //     const forecastDate = new Date(item.dt_txt);
// //     return forecastDate.getDate() > currentDate.getDate();
// //   }).slice(0, 3); // Obtener solo los primeros tres resultados

// //   // Calcular la temperatura promedio para los próximos tres días
// //   const totalTemperature = forecastData.reduce((acc, curr) => acc + curr.main.temp, 0);
// //   const averageTemperature = totalTemperature / forecastData.length;

// //   // Mostrar los datos de la previsión del tiempo
// //   forecastElement.textContent = `${averageTemperature.toFixed(1)}°C`; // Temperatura promedio
// //   windSpeedElement.textContent = `Wind Speed: ${forecastData[0].wind.speed} m/s`; // Velocidad del viento
// //   windChillElement.textContent = `Wind Chill: ${calculateWindChill(averageTemperature, forecastData[0].wind.speed).toFixed(1)}°C`; // Wind chill
// // }

// // // Función para calcular el wind chill
// // function calculateWindChill(temperature, windSpeed) {
// //   const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
// //   return windChill;
// // }

// // // Función de utilidad para capitalizar la primera letra de una cadena
// // function capitalize(str) {
// //   return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // // Realizar las solicitudes de API para el tiempo actual y la previsión del tiempo
// // fetchCurrentWeather();
// // // fetchWeatherForecast();


const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '11e47217061cf08187ac30206bdc7206';


function calculateWindChill(temp, windSpeed) {
    const T = (temp * 9/5) + 32; // Convert temperature to Fahrenheit
    const V = windSpeed * 2.237; // Convert wind speed to miles per hour
    const windChill = 35.74 + 0.6215 * T - 35.75 * Math.pow(V, 0.16) + 0.4275 * T * Math.pow(V, 0.16);
    return Math.round(windChill);
}

async function weatherFn() {
    const cityName = 'Madrid'; // You can remove this line and add a prompt or input field for the user to enter the city name 
    const temp = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(temp);
        const data = await res.json();
        
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
  document.getElementById('city-name').textContent = data.name;
  document.getElementById('date').textContent = new Date().toLocaleString();
  document.getElementById('temperature').textContent = `${((data.main.temp * 9/5) + 32).toFixed(1)}°F`;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
  document.getElementById('windchill').textContent = `Wind Chill: ${calculateWindChill(data.main.temp, data.wind.speed)}°F`;
  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

weatherFn(); // Llamada a la función para obtener y mostrar los datos del clima al cargar la página

const apiKey2 = '11e47217061cf08187ac30206bdc7206';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast';

function getForecast(city) {
  const requestUrl = `${url2}?q=${city}&appid=${apiKey2}&units=imperial`;
  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      const forecast = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 2);
        const dayAfterTomorrow = new Date();
        dayAfterTomorrow.setDate(today.getDate() + 3);
        return forecastDate >= today && forecastDate <= dayAfterTomorrow;
      });
      displayForecast(forecast);
    })
    .catch(error => console.error(error));
}

function displayForecast(forecast) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 2);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(today.getDate() + 3);
  document.getElementById('forecast-day-0').textContent = today.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById('forecast-day-1').textContent = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById('forecast-day-2').textContent = dayAfterTomorrow.toLocaleDateString('en-US', { weekday: 'long' });
  for (let i = 0; i < 3; i++) {
    const forecastItem = forecast[i];
    const forecastDate = new Date(forecastItem.dt * 1000);
    const forecastIcon = document.getElementById(`forecast-icon-${i}`);
    forecastIcon.src = `https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`;
    const forecastTemp = document.getElementById(`forecast-temp-${i}`);
    forecastTemp.textContent = `${forecastItem.main.temp}°F`;
    const forecastDescription = document.getElementById(`forecast-description-${i}`);
    forecastDescription.textContent = forecastItem.weather[0].description;
  }
}

getForecast('Madrid');