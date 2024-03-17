// Función para determinar si el día actual es lunes, martes o miércoles
function isWeekday() {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 es domingo, 1 es lunes, ..., 6 es sábado
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Devuelve true si es lunes, martes o miércoles
}

// Función para mostrar u ocultar el banner dependiendo del día de la semana
function toggleBanner() {
    var banner = document.getElementById("banner");
    if (isWeekday()) {
        banner.style.display = "block"; // Muestra el banner si es lunes, martes o miércoles
    } else {
        banner.style.display = "none"; // Oculta el banner en otros días
    }
}

// Mostrar u ocultar el banner al cargar la página
toggleBanner();

// Escuchar el evento de clic en el banner para cerrarlo cuando se hace clic en el contenido "X"
document.getElementById("banner").addEventListener("click", function(event) {
    var banner = document.getElementById("banner");
    // Verificar si se hizo clic en el contenido "X"
    if (event.target.tagName === "DIV" || event.target.tagName === "P") {
        var bannerRect = banner.getBoundingClientRect();
        var xPosition = event.clientX - bannerRect.left;
        var yPosition = event.clientY - bannerRect.top;
        var xSize = 20;
        var ySize = 20;
        if (xPosition >= bannerRect.width - xSize && yPosition <= ySize) {
            banner.style.display = "none"; // Ocultar el banner si se hace clic en "X"
        }
    }
});
