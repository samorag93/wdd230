


// // JavaScript específico para reservation.html
// document.addEventListener('DOMContentLoaded', function() {
//     // Cargar información del contrato de alquiler
//     const contractInfoContainer = document.getElementById('contract-info-container');
//     contractInfoContainer.innerHTML = `
//         <div class="contract-info">
//         <h2>Terms and Conditions</h2>
//         <ol>
//             <li>Scoots agrees to use the vehicle only for lawful and authorized purposes, and agrees to comply with all applicable traffic laws and regulations.</li>
//             <li>Scoots is responsible for any damage caused to the vehicle during the rental period, including damages resulting from accidents, negligence, or misuse.</li>
//             <li>Scoots agrees to return the vehicle in the same condition as received, with normal wear expected from use.</li>
//             <li>Scoots has no right to sublease, lend, or transfer the vehicle to third parties without the user's prior written consent.</li>
//             <li>The user reserves the right to inspect and maintain the vehicle during the rental period to ensure its proper functioning and safety.</li>
//             <li>Scoots is responsible for any fines, charges, or fees incurred during the rental period, including parking fines, toll violations, and traffic citations.</li>
//             <li>Scoots must notify the user immediately in case of any accident, breakdown, or mechanical issue with the vehicle.</li>
//             <li>Scoots must return the vehicle to the designated location and on the agreed-upon date at the end of the rental period. Failure to do so may result in additional charges.</li>
//             <li>The user is not responsible for any loss or damage to personal belongings left in the vehicle during the rental period.</li>
//             <li>Violation of any of the terms and conditions of this agreement may result in the termination of the agreement and the retention of the security deposit by the user.</li>
//         </ol>
//         <p>By signing this contract, Scoots acknowledges having read and understood the terms and conditions herein, and agrees to comply with them in full.</p>
//         </div>
//     `;

//     // Cargar el formulario de reserva dinámicamente
//     const reservationFormContainer = document.getElementById('reservation-form-container');
//     reservationFormContainer.innerHTML = `
//         <form class="reservation-form" action="#" method="post">
//             <h2>Reservation Form</h2>
//             <div class="form-group">
//                 <label for="date">Arrival Date:</label>
//                 <input type="date" id="date" name="date" required>
//             </div>
//             <div class="form-group">
//                 <label for="period">Period in Days:</label>
//                 <input type="text" id="period" name="period" required>
//             </div>
//             <div class="form-group">
//                 <label for="rental-type">Rental Type:</label>
//                 <select id="rental-type" name="rental-type" onchange="updateRentalOptions()" required>
//                     <option value="scooter">Select Types of Rentals</option>
//                     <option value="scooter">Scooter</option>
//                     <option value="atv">ATV</option>
//                     <option value="jeep">Jeep</option>
//                 </select>
//             </div>
//             <div class="form-group">
//                 <label for="rental-options">Rental Options:</label>
//                 <select id="rental-options" name="rental-options" required>
//                     <!-- Las opciones se generarán dinámicamente aquí -->
//                 </select>
//             </div>
//             <div class="form-group">
//                 <label for="number">Number of Rentals:</label>
//                 <input type="number" id="number" name="number" min="1" required>
//             </div>
//             <div class="form-group">
//                 <label for="phone">Phone Number:</label>
//                 <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
//                 <small>Format: 123-456-7890</small>
//             </div>
//             <div class="form-group">
//                 <label for="name">Name:</label>
//                 <input type="text" id="name" name="name" required>
//             </div>
//             <div class="form-group">
//                 <label for="email">Email:</label>
//                 <input type="email" id="email" name="email" required placeholder="example@domain.com">
//             </div>
//             <div class="form-group">
//                 <label for="country">Country of Origin:</label>
//                 <input type="text" id="country" name="country" required>
//             </div>
//             <div class="form-group">
//                 <label for="cruise-line">Cruise Line (if applicable):</label>
//                 <input type="text" id="cruise-line" name="cruise-line">
//             </div>
//             <div class="form-group">
//                 <label for="special-accommodations">Special Accommodations/Comments:</label>
//                 <textarea id="special-accommodations" name="special-accommodations"></textarea>
//             </div>
//             <div class="form-group">
//                 <input type="submit" value="Submit">
//             </div>
//         </form>
//     `;
// });



// function updateRentalOptions() {
//     const rentalTypeSelect = document.getElementById('rental-type');
//     const rentalOptionsSelect = document.getElementById('rental-options');

//     // Limpiar las opciones existentes
//     rentalOptionsSelect.innerHTML = '';

//     // Obtener el valor seleccionado del primer select
//     const selectedRentalType = rentalTypeSelect.value;

//     // Generar las opciones dependiendo del tipo de alquiler seleccionado
//     if (selectedRentalType === 'scooter') {
//         addOption(rentalOptionsSelect, 'Select Scooter');
//         addOption(rentalOptionsSelect, 'Honda Metropolitan (49cc) - 1 person');
//         addOption(rentalOptionsSelect, 'Honda Dio (110cc) - 2 person');
//         addOption(rentalOptionsSelect, 'Honda PCX150 (149cc) - 2 person');
//     } else if (selectedRentalType === 'atv') {
//         addOption(rentalOptionsSelect, 'Select ATV');
//         addOption(rentalOptionsSelect, 'Honda Pioneer 1000 - 4 person');
//     } else if (selectedRentalType === 'jeep') {
//         addOption(rentalOptionsSelect, 'Select Jeep');
//         addOption(rentalOptionsSelect, 'Jeep Wrangler - 4 door manuel with A/C - 5 person');
//         addOption(rentalOptionsSelect, 'Jeep Wrangler - 2 door - open air - manuel - 4 person');
//     }
// }

// function addOption(selectElement, optionText) {
//     const option = document.createElement('option');
//     option.text = optionText;
//     selectElement.add(option);
// }

// JavaScript específico para reservation.html
document.addEventListener('DOMContentLoaded', function() {
    // Cargar información del contrato de alquiler
    const contractInfoContainer = document.getElementById('contract-info-container');
    contractInfoContainer.innerHTML = `
        <div class="contract-info">
            <h2>Terms and Conditions</h2>
            <ol>
                <li>Scoots agrees to use the vehicle only for lawful and authorized purposes, and agrees to comply with all applicable traffic laws and regulations.</li>
                <li>Scoots is responsible for any damage caused to the vehicle during the rental period, including damages resulting from accidents, negligence, or misuse.</li>
                <li>Scoots agrees to return the vehicle in the same condition as received, with normal wear expected from use.</li>
                <li>Scoots has no right to sublease, lend, or transfer the vehicle to third parties without the user's prior written consent.</li>
                <li>The user reserves the right to inspect and maintain the vehicle during the rental period to ensure its proper functioning and safety.</li>
                <li>Scoots is responsible for any fines, charges, or fees incurred during the rental period, including parking fines, toll violations, and traffic citations.</li>
                <li>Scoots must notify the user immediately in case of any accident, breakdown, or mechanical issue with the vehicle.</li>
                <li>Scoots must return the vehicle to the designated location and on the agreed-upon date at the end of the rental period. Failure to do so may result in additional charges.</li>
                <li>The user is not responsible for any loss or damage to personal belongings left in the vehicle during the rental period.</li>
                <li>Violation of any of the terms and conditions of this agreement may result in the termination of the agreement and the retention of the security deposit by the user.</li>
            </ol>
            <p>By signing this contract, Scoots acknowledges having read and understood the terms and conditions herein, and agrees to comply with them in full.</p>
        </div>
    `;

    // Cargar el formulario de reserva dinámicamente
    const reservationFormContainer = document.getElementById('reservation-form-container');
    reservationFormContainer.innerHTML = `
        <form class="reservation-form" action="#" method="post">
            <h2>Reservation Form</h2>
            <div class="form-group">
                <label for="date">Arrival Date:</label>
                <input type="date" id="date" name="date" required>
            </div>
            <div class="form-group">
                <label for="period">Period in Days:</label>
                <input type="text" id="period" name="period" required>
            </div>
            <div class="form-group">
                <label for="rental-type">Rental Type:</label>
                <select id="rental-type" name="rental-type" onchange="updateRentalOptions()" required>
                    <option value="scooter">Select Types of Rentals</option>
                    <option value="scooter">Scooter</option>
                    <option value="atv">ATV</option>
                    <option value="jeep">Jeep</option>
                </select>
            </div>
            <div class="form-group">
                <label for="rental-options">Rental Options:</label>
                <select id="rental-options" name="rental-options" required>
                    <!-- Las opciones se generarán dinámicamente aquí -->
                </select>
            </div>
            <div class="form-group">
                <label for="number">Number of Rentals:</label>
                <input type="number" id="number" name="number" min="1" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                <small>Format: 123-456-7890</small>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="example@domain.com">
            </div>
            <div class="form-group">
                <label for="country">Country of Origin:</label>
                <input type="text" id="country" name="country" required>
            </div>
            <div class="form-group">
                <label for="cruise-line">Cruise Line (if applicable):</label>
                <input type="text" id="cruise-line" name="cruise-line">
            </div>
            <div class="form-group">
                <label for="special-accommodations">Special Accommodations/Comments:</label>
                <textarea id="special-accommodations" name="special-accommodations"></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit">
            </div>
        </form>
    `;
});

// function openModal() {
//     document.getElementById('id01').style.display = 'block';
// }
  
// function closeModal() {
//     document.getElementById('id01').style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de reserva
    const reservationForm = document.querySelector('.reservation-form');

    // Agregar un evento de escucha para el envío del formulario
    reservationForm.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();
        
        // Mostrar el modal
        openModal();
    });

     // Obtener el span para cerrar el modal
     const closeButton = document.querySelector('.close-btn');

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

    // Resto del código que puedas tener, como otras funciones, variables, etc.
});

  

function updateRentalOptions() {
    const rentalTypeSelect = document.getElementById('rental-type');
    const rentalOptionsSelect = document.getElementById('rental-options');

    // Limpiar las opciones existentes
    rentalOptionsSelect.innerHTML = '';

    // Obtener el valor seleccionado del primer select
    const selectedRentalType = rentalTypeSelect.value;

    // Generar las opciones dependiendo del tipo de alquiler seleccionado
    if (selectedRentalType === 'scooter') {
        addOption(rentalOptionsSelect, 'Select Scooter');
        addOption(rentalOptionsSelect, 'Honda Metropolitan (49cc) - 1 person');
        addOption(rentalOptionsSelect, 'Honda Dio (110cc) - 2 person');
        addOption(rentalOptionsSelect, 'Honda PCX150 (149cc) - 2 person');
    } else if (selectedRentalType === 'atv') {
        addOption(rentalOptionsSelect, 'Select ATV');
        addOption(rentalOptionsSelect, 'Honda Pioneer 1000 - 4 person');
    } else if (selectedRentalType === 'jeep') {
        addOption(rentalOptionsSelect, 'Select Jeep');
        addOption(rentalOptionsSelect, 'Jeep Wrangler - 4 door manuel with A/C - 5 person');
        addOption(rentalOptionsSelect, 'Jeep Wrangler - 2 door - open air - manuel - 4 person');
    }
}

function addOption(selectElement, optionText) {
    const option = document.createElement('option');
    option.text = optionText;
    selectElement.add(option);
}
