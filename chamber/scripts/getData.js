const url =
  "https://raw.githubusercontent.com/samorag93/wdd230/main/chamber/data/members.json";

const cards = document.querySelector(".grid");

const getMembersData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json(); // Convierte la respuesta a JSON
    displayMembers(data.companies);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayMembers = (companies) => {
  companies.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h2"); // Crear elemento para el nombre
    let image = document.createElement("img");
    let address = document.createElement("p"); // Crear elemento para la dirección
    let website = document.createElement("a");
    let phone = document.createElement("p");
    let memberShip = document.createElement("p");
    
    name.textContent = member.name; // Establecer el texto del nombre
    image.setAttribute("src", member.image); // Establecer la fuente de la imagen
    image.setAttribute("alt", `Image of ${member.name}`); // Establecer el atributo alt de la imagen
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "200");
    image.setAttribute("height", "100");

    address.textContent = `${member.address}`; // Establecer el texto de la dirección
    phone.textContent = `${member.phone}`; // Establecer el texto del teléfono
    memberShip.textContent = `${member.membership_level} Membership`;
    website.innerHTML = `More Details`; // Establecer el enlace al sitio web
    website.setAttribute("class",`website`)
    website.setAttribute("href",member.website)
    card.appendChild(name); // Agregar el nombre al card
    card.appendChild(image); // Agregar la imagen al card
    card.appendChild(address); // Agregar la dirección al card
    card.appendChild(phone); // Agregar el teléfono al card
    card.appendChild(memberShip);
    card.appendChild(website);

    cards.appendChild(card);
  });
};

getMembersData();



const gridbutton = document.querySelector("#gridViewButton");
const listbutton = document.querySelector("#listViewButton");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

gridbutton.addEventListener("click", () => {
    gridbutton.style.backgroundColor = "#6495ED";
	listbutton.style.backgroundColor = "";
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
	listbutton.style.backgroundColor = "#6495ED";
	gridbutton.style.backgroundColor = "";
}