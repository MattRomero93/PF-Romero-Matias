const searchButton = document.querySelector(".nav__link--search");
const closeButton = document.querySelector(".search__link-close");
const desktopNav = document.querySelector(".nav__menu--desktop");
const searchContainer = document.querySelector(".search");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector(".mobile__menu");
const navContainer = document.querySelector("#header");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".search-mobile__bar");
const nav = document.querySelector(".header nav");
const searchInput = document.querySelector(".search-mobile__input");
const cancelBtn = document.querySelector(".search-mobile__cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})