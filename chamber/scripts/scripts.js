
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

