// burger menu
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


// search bar
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".date").forEach((input) => {
        new Cleave(input, {
            date: true,
            datePattern: ['m', 'd', 'Y']
        });
    });
});


// Image animation
window.onload = function () {
    anime({
        targets: '#luggage',
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 3000,
        delay: 4000,
        easing: 'easeOutExpo',
        begin: function () {
            console.log("Animation started!");
        },
        complete: function () {
            console.log("Animation completed!");
        }
    });
    anime({
        targets: '.animated-word',
        opacity: [0, 1],
        duration: 4000,
        delay: 2000,
        easing: 'easeOutExpo',
    });
};


// card animation
AOS.init();


// Leaflet map
let map = L.map('map');
map.setView([43.6426, -79.3871], 15); // Downtown Toronto

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([43.6426, -79.3871]).addTo(map); // Pin at CN tower

const cards = document.querySelectorAll('.image-card');

cards.forEach(card => {
    const hoverElement = card.querySelector('.card-hover');

    card.addEventListener('mouseenter', () => {
        hoverElement.style.opacity = '1';
        hoverElement.style.visibility = 'visible';
    });

    card.addEventListener('mouseleave', () => {
        hoverElement.style.opacity = '0';
        hoverElement.style.visibility = 'hidden';
    });
});