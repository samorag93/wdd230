
var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});




document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de contacto
    const contactForm = document.getElementById('contactForm');

    // Agregar un evento de escucha para el envío del formulario
    contactForm.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();
        
        // Mostrar el modal
        openModal();
    });

	 // Obtener el span para cerrar el modal
     const closeButton = document.querySelector('.close_btn');

     // Agregar un evento de clic al span
     closeButton.addEventListener('click', function() {
         // Cerrar el modal al hacer clic en el span
         closeModal();
     });
    // Función para mostrar el modal
    function openModal() {
        document.getElementById('id01').style.display = 'block';
    }
      
    // Función para cerrar el modal
    function closeModal() {
        document.getElementById('id01').style.display = 'none';
    }
});

