// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=11e47217061cf08187ac30206bdc7206';

async function apiFetch() {
  try {
    const response = await fetch(`${url}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const weatherEvents = data.weather;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${weatherEvents[0].icon}.png`);
  weatherIcon.setAttribute('alt', weatherEvents[0].description);
  captionDesc.textContent = `${capitalize(weatherEvents[0].description)}`;
}

function capitalize(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
