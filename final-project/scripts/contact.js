const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=11e47217061cf08187ac30206bdc7206';

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

function closebutton() {
    var banner = document.getElementsByClassName("banner");
    banner.style.display = "none"; // Ocultar el banner al hacer clic en el span
}