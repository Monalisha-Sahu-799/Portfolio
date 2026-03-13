// 3D tilt effect for cards

VanillaTilt.init(document.querySelectorAll(".card"), {
max: 20,
speed: 400,
glare: true,
"max-glare": 0.3
});



// Project modal popup

function openModal(text){

document.getElementById("modal-text").innerText = text;

document.getElementById("modal").style.display = "block";

}

function closeModal(){

document.getElementById("modal").style.display = "none";

}



// Typing animation

new Typed("#typing", {

strings: [
"AI Developer",
"Python Developer",
"FastAPI Developer",
"Full Stack Developer"
],

typeSpeed: 70,
backSpeed: 40,
backDelay: 1500,
loop: true

});



// Dynamic floating bubbles

const bubbleContainer = document.querySelector(".bubbles");

for(let i = 0; i < 25; i++){

let bubble = document.createElement("div");

bubble.classList.add("bubble");

let size = Math.random() * 60 + 20;

bubble.style.width = size + "px";
bubble.style.height = size + "px";

bubble.style.left = Math.random() * 100 + "%";

bubble.style.animationDuration = (Math.random() * 10 + 5) + "s";

bubble.style.opacity = Math.random();

bubbleContainer.appendChild(bubble);

}

ScrollReveal().reveal('.hero-text', {

delay:200,
distance:'60px',
origin:'left',
duration:1000

});

ScrollReveal().reveal('.hero-animation', {

delay:300,
distance:'60px',
origin:'right',
duration:1000

});

ScrollReveal().reveal('.section h2', {

delay:200,
distance:'40px',
origin:'bottom',
duration:800

});

ScrollReveal().reveal('.card', {

delay:200,
distance:'50px',
origin:'bottom',
duration:800,
interval:200

});

// NAVBAR ACTIVE LINK ON SCROLL

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

// fix for last section (contact)
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
current = "contact";
}

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});



// MOBILE MENU TOGGLE

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

navLinks.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

// 

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(){

document.querySelectorAll("nav a").forEach(l => l.classList.remove("active"));

this.classList.add("active");

});

});