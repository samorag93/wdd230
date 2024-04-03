

fetch('data/prices.json')
    .then(response => response.json())
    .then(data => {
        const rentalsTable = document.getElementById('rentals-table').getElementsByTagName('tbody')[0];
        
        // Iterar sobre los datos y crear filas de tabla
        data.max_rental_pricing.forEach(rental => {
            const row = `
            <tr>
                <td>
                    <div class="image-container">
                        <img src="${rental.image}" alt="${rental.rental_type}"><br>
                        <div class="zoom-image" style="background-image: url('${rental.image}')"></div>
                    </div>
                    <span>${rental.rental_type}</span>
                </td>
                <td data-label="Max Persons">${rental.max_persons}</td>
                <td data-label="Reservation Half Day">${rental.reservation["half_day (3hrs)"]}</td>
                <td data-label="Reservation Full Day">${rental.reservation["full_day"]}</td>
                <td data-label="Walk-in Half Day">${rental["walk-in"]["half_day (3hrs)"]}</td>
                <td data-label="Walk-in Full Day">${rental["walk-in"]["full_day"]}</td>
                <td><a href="reservation.html">Book</a></td>
            </tr>
            `;
            rentalsTable.insertAdjacentHTML('beforeend', row);
        });
});
