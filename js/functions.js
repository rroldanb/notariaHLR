function showTab(tabName) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display  = "block";
}


const hamburgersa = document.querySelector(".hamburgersa");
const headerNavMenu = document.querySelector(".headerNavMenu");

hamburgersa.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgersa.classList.toggle("active");
    headerNavMenu.classList.toggle("active");
}

const headerNavLink = document.querySelectorAll(".headerNavLink");
const fichasSinTabs = document.querySelector(".fichasSinTabs");

headerNavLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    document.getElementById("lineas3").innerHTML = "&#9776";
    estadoActual = 1;
    hamburgersa.classList.remove("active");
    headerNavMenu.classList.remove("active");    
    fichasSinTabs.style.marginTop = "20px";
}


const lineas3 = document.getElementById("lineas3");

let estadoActual = 1;

lineas3.addEventListener("click", function () {
    if (estadoActual === 1) {
        lineas3.innerHTML = "&#10005";
        estadoActual = 2;
        fichasSinTabs.style.marginTop = "200px";
    } else {
        lineas3.innerHTML = "&#9776";
        estadoActual = 1;
        fichasSinTabs.style.marginTop = "20px";
    }
});

// Obtén una referencia al botón y al div
const botonCambiarMargen = document.getElementById("cambiarMargen");
const miDiv = document.getElementById("miDiv");

// Agrega un manejador de clic al botón
botonCambiarMargen.addEventListener("click", function() {
    // Cambia el valor de margin-top del div
    miDiv.style.marginTop = "20px";
});