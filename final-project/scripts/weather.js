const date = document.querySelector("#date");
const temperature = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weatherIcon");

const humidity = document.querySelector("#humidity")

// const tomorrow_temp = document.querySelector('next-day-temperature');
// const tomorrow_weather_icon = document.querySelector('next-day-weather-icon');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=11e47217061cf08187ac30206bdc7206';
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=20.51&lon=-86.94&appid=11e47217061cf08187ac30206bdc7206
const nextDayUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.51&lon=-86.94&units=imperial&appid=11e47217061cf08187ac30206bdc7206';

const dateElement = document.getElementById("date");

// Función para obtener la fecha actual en formato legible
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

// Actualizar el contenido de la etiqueta <h3> con la fecha actual
dateElement.textContent = getCurrentDate();


async function apiFetch() {
    try {
      const response = await fetch(`${url}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); 
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
}
  
apiFetch();
  
function displayResults(data) {
    document.getElementById('temp-max').textContent = `Today Temperature Max: ${Math.round(data.main.temp_max)}ºF`;
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const weatherEvents = data.weather;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherEvents[0].icon}.png`);
    weatherIcon.setAttribute('alt', weatherEvents[0].description);
    document.getElementById('description').textContent = capitalize(data.weather[0].description);
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}


const nextDayElement = document.getElementById("next-day");

// Función para obtener el día de mañana
function getNextDay() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Añadir un día
    const options = { weekday: 'long' };
    return tomorrow.toLocaleDateString('en-US', options);
}

function closebutton() {
  var banner = document.getElementById("banner");
  banner.style.display = "none"; // Ocultar el banner al hacer clic en el span
}


// Actualizar el contenido de la etiqueta <h3> con el día de mañana
nextDayElement.textContent = `Next Day Forecast (${getNextDay()} 15:00h)`;

const urlfor15h = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.52&lon=-86.94&appid=11e47217061cf08187ac30206bdc7206&units=imperial';

fetch(urlfor15h)
    .then(response => response.json())
    .then(data => {
        const lista = data.list;
        let temperatura;

        // Iterar sobre la lista de datos
        for (let i = 0; i < lista.length; i++) {
            const bloque = lista[i];
            const dtTxt = bloque.dt_txt;

            // Verificar si el bloque tiene el horario deseado (15:00:00)
            if (dtTxt.includes("15:00:00")) {
                temperatura = bloque.main.temp;
                const weatherEvents = bloque.weather;
                const description = weatherEvents[0].description;
                const icon = weatherEvents[0].icon;

                
                const temperaturaElemento = document.getElementById('next_temperature');
                temperaturaElemento.textContent = `${temperatura} °F`;

                const descriptionElemento = document.getElementById('next_description');
                descriptionElemento.textContent = capitalize(description);

                const iconElemento = document.getElementById('next-day-weather-icon');
                iconElemento.src = `http://openweathermap.org/img/wn/${icon}.png`;

                break; 
            }
        }
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
});


      



function capitalize(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }