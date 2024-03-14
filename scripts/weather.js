const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// 40.2323744119189, -3.7680240636521325
                                                                // 40.41274718629942, -3.70427024156695
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.23&lon=-3.77&units=imperial&appid=11e47217061cf08187ac30206bdc7206';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.41&lon=-3.70&units=imperial&appid=11e47217061cf08187ac30206bdc7206';


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
