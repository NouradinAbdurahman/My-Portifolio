const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navBar = document.querySelector("nav");

openMenu.addEventListener('click',() =>{
navBar.classList.add('active');
})
closeMenu.addEventListener('click',() =>{
navBar.classList.remove('active');
})