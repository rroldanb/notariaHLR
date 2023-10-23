// TABS

function showTab(tabName) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

//MENU HAMBURGUESA

const hamburgersa = document.querySelector(".hamburgersa");
const headerNavMenu = document.querySelector(".navbar-menu");

hamburgersa.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgersa.classList.toggle("active");
    headerNavMenu.classList.toggle("active");
}

const headerNavLink = document.querySelectorAll(".navbar-link");

headerNavLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    document.getElementById("lineas3").innerHTML = "&#9776";
    estadoActual = 1;
    hamburgersa.classList.remove("active");
    headerNavMenu.classList.remove("active");
}


const lineas3 = document.getElementById("lineas3");

let estadoActual = 1;

lineas3.addEventListener("click", function () {
    if (estadoActual === 1) {
        lineas3.innerHTML = "&#10005";
        estadoActual = 2;
    } else {
        lineas3.innerHTML = "&#9776";
        estadoActual = 1;
    }
});
