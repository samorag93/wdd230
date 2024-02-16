function calculateWindChill(temperature, windSpeed) {
    // Verificar si los valores cumplen con los límites de especificación
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calcular el factor de sensación térmica
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1); // Redondear a una décima
    } else {
        return "N/A";
    }
}

// Obtener la temperatura y la velocidad del viento del HTML
var temperature = parseFloat(document.getElementById("temperature").innerText);
var windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

// Calcular el factor de sensación térmica
var windChill = calculateWindChill(temperature, windSpeed);

// Mostrar el factor de sensación térmica en el HTML
document.getElementById("windChill").innerText = "Wind Chill: " + windChill + "°F";
