
    document.addEventListener('DOMContentLoaded', function () {
        // Copyright year
        var currentYear = new Date().getFullYear();
        document.getElementById('year').textContent = currentYear;

        // Last modified date
        var lastModifiedDate = document.lastModified;
        document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate;
    });

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    const form = document.querySelector(".formjoin");

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            main.style.background = "black";
            main.style.color = "white";
            modeButton.textContent = "🔆";
            form.style.background = "black"
            
        } else {
            main.style.background = "white";
            main.style.color = "black";
            modeButton.textContent = "🕶️";
            form.style.background = "#eceaea"
            
        }
    });




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slideshow-img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Abrir y cerrar el modal
document.addEventListener("DOMContentLoaded", function() {
  let modal = document.getElementById("myModal");
  let modalMessage = document.getElementById("modal-message");
  let span = document.getElementsByClassName("close")[0];

  // Función para mostrar el modal con el mensaje
  function showModal(message) {
      modalMessage.textContent = message;
      modal.style.display = "block";
  }

  // Si el usuario hace clic en (x), cierra el modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Si el usuario hace clic en cualquier lugar fuera del modal, cierra el modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Mensaje sobre la última visita utilizando localStorage
  let lastVisit = localStorage.getItem('lastVisit');
  let currentDate = Date.now(); 
  let currentDateString = new Date(currentDate).toISOString().split('T')[0];

  if(!lastVisit) {
      showModal("Welcome! Let us know if you have any questions.");
  } else {
      let daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
      if(daysSinceLastVisit < 1) {
          showModal("Back so soon! Awesome!");
      } else {
          let message = "You last visited  " + daysSinceLastVisit + " " + ((daysSinceLastVisit === 1) ? "day ago" : "days ago");
          showModal(message);
      }
  }

  localStorage.setItem('lastVisit', currentDate); // Almacena la fecha actual en localStorage
});


function showBenefits() {
    var membershipLevel = document.getElementById("membership-level").value;
    var benefitsContainer = document.getElementById("benefits-container");
    benefitsContainer.innerHTML = ""; 
    
    if (membershipLevel === "NP") {
        // No hay beneficios para la membresía sin fines de lucro
        benefitsContainer.innerHTML = `
            <p><strong>Non Profit Membership: </strong></p><br>
            <ul>
                <li>- Access to select events.</li><br>
                <li>- Member Directory.</li><br>
                <li>- Basic online resources.</li><br>
                <li>- Newsletter.</li><br>
            </ul>
        `;
    } else if (membershipLevel === "Bronze") {
        benefitsContainer.innerHTML = `
            <p><strong>🥉 Bronze Membership:</strong></p><br>
            <ul>
                <li>- All the benefits of the free membership.</li><br>
                <li>- Discounts on selected services.</li><br>
                <li>- Descuentos en servicios.</li><br>
                <li>- More detailed newsletter.</li><br>
            </ul>
        `;
    } else if (membershipLevel === "Silver") {
        benefitsContainer.innerHTML = `
            <p><strong>🥈 Silver Membership:</strong></p><br>
            <ul>
                <li>- All the benefits of the bronze membership.</li><br>
                <li>- Additional advertising and promotion.</li><br>
                <li>- Access to more detailed market data.</li><br>
                <li>- Participation in specific committees.</li><br>
            </ul>
        `;
    } else if (membershipLevel === "Gold") {
        benefitsContainer.innerHTML = `
            <p><strong>🥇 Gold Membership:</strong></p><br>
            <ul>
                <li>- All the benefits of the bronze and silver membership.</li><br>
                <li>- VIP access to exclusive events.</li><br>
                <li>- Personalized counseling sessions.</li><br>
                <li>- Representation before the government and lobby.</li><br>
            </ul>
        `;
    }
}

// Establecer la fecha/hora actual en el campo de entrada oculto
document.getElementById("submission-time").value = Date.now();

//get json data

const url = 'data/members.json';
const cards = document.querySelector('#cards');

const getMembersData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json(); // Convierte la respuesta a JSON
      displayProphets(data.companies); // Llama a la función displayProphets con la matriz de profetas como argumento
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2'); // Crear elemento para el nombre
        let image = document.createElement('img');
        let address = document.createElement('p'); // Crear elemento para la dirección
        let phone = document.createElement('p');
        name.textContent = member.name; // Establecer el texto del nombre
        image.setAttribute('src', member.image); // Establecer la fuente de la imagen
        image.setAttribute('alt', `Image of ${member.name}`); // Establecer el atributo alt de la imagen
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');

        address.textContent = `Address: ${member.address}`; // Establecer el texto de la dirección
        phone.textContent = `Phone: ${member.phone}`; // Establecer el texto del teléfono

        card.appendChild(name); // Agregar el nombre al card
        card.appendChild(image); // Agregar la imagen al card
        card.appendChild(address); // Agregar la dirección al card
        card.appendChild(phone); // Agregar el teléfono al card

        cards.appendChild(card);
    });
};

getMembersData();

