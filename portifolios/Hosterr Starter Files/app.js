const navMenu = document.getElementById("nav");
const toggleMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});