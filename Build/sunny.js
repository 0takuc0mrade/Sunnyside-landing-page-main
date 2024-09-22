"use strict";
const btnToggleMenu = document.getElementById("mobileMenu");

const menu = document.querySelector(".nav-links");

const toggleMenu = function () {
  menu.classList.toggle("hidden");
};

btnToggleMenu.addEventListener("click", toggleMenu);
