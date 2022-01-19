'use strict';

let navClass = "bg-dark";

const cssLink = document.querySelector("#bg-theme");
const navbar = document.querySelector(".navbar");
const projectBg = document.querySelector("#projects");
const sunBtn = document.querySelector(".btn-sun");
const moonBtn = document.querySelector(".btn-moon");

sunBtn.addEventListener("click", () => {

    cssLink.href = "./assets/light-styles/lightTheme.css";

    sunBtn.classList.add("buttons__active");
    moonBtn.classList.remove("buttons__active");
    moonBtn.classList.add("buttons__unactive");

    navbar.classList.remove("bg-dark", "navbar-dark");
    navbar.classList.add("navbar-light", "bg-light");
    projectBg.classList.remove("bg-dark");
    projectBg.classList.add("bg-light");
});

moonBtn.addEventListener("click", () => {
    cssLink.href = "./assets/styles/main.css";

    moonBtn.classList.add("buttons__active");
    sunBtn.classList.remove("buttons__active");
    sunBtn.classList.add("buttons__unactive");
    
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("bg-dark", "navbar-dark");
    projectBg.classList.remove("bg-light");
    projectBg.classList.add("bg-dark");
})