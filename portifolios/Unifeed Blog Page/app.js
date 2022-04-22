let openMenu = document.querySelector(".open");
let nav = document.querySelector(".nav")
openMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
})