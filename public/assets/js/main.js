const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

closeIcon.style.display = "none";
menuIcon.style.display = "block";

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".start-date").forEach((input) => {
        new Cleave(input, {
            date: true,
            datePattern: ['m', 'd', 'Y']
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     anime({
//         targets: '#lagguage',
//         translateY: 0,
//         duration: 3000,
//         easing: 'easeInOutExpo'
//     });
// });


// card animation
AOS.init();


// Leaflet map
let map = L.map('map');
map.setView([43.6426, -79.3871], 15); // Downtown Toronto

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([43.6426, -79.3871]).addTo(map); // Pin at CN tower