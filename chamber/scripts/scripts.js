
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

    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


