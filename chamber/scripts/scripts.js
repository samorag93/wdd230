
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

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            main.style.background = "black";
            main.style.color = "white";
            modeButton.textContent = "🔆";
        } else {
            main.style.background = "white";
            main.style.color = "black";
            modeButton.textContent = "🕶️";
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
