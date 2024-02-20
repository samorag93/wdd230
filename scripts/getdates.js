// getdates.js

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

//step 1
const visitsDisplay = document.querySelector(".visits");
//step 2
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
//step 3
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
//step 4
numVisits++;
//step 5
localStorage.setItem("numVisits-ls", numVisits);