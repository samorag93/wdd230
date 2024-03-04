const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json(); // Convierte la respuesta a JSON
    displayProphets(data.prophets); // Llama a la función displayProphets con la matriz de profetas como argumento
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // Cambia '__' por 'h2'
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Utiliza las propiedades name y lastname para mostrar el nombre completo
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Utiliza las propiedades name y lastname para el atributo alt
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName); // Agrega el nombre completo al card
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData(); // Llama a la función getProphetData para iniciar la recuperación de datos
