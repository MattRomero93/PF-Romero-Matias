const moreOptions = document.querySelector("#bmore");
const moreMenu = document.querySelector(".more .menu-more");

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
})