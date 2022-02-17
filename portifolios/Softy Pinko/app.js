// Open nad Close Menu
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navBar = document.querySelector("nav");
const headerContent = document.querySelector(".header-content");

openMenu.addEventListener("click", () => {
    headerContent.classList.add("headerBar");
});
closeMenu.addEventListener("click", () => {
  headerContent.classList.remove("headerBar");
});

openMenu.addEventListener("click", () => {
  navBar.classList.add("open-close");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("open-close");
});
