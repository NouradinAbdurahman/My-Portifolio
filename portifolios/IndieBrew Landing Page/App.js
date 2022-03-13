const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navBar = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
    navBar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove ("active");
});
