// Mobile Navbar
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.querySelector('.navbar');

openMenu.addEventListener('click',() =>{
    nav.classList.add('menu-btn');
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

// Scroll To Top
const btnScrollToTup = document.querySelector(".scrollUp");

window.onscroll = () => {
    if(window.scrollY >= 500) {
        btnScrollToTup.style.display = "block";
    } else  {
        btnScrollToTup.style.display = "none";
    }
}

btnScrollToTup.addEventListener("click",() => {
    window.scrollTo ({
        top:0,
        left:0,
        behavior: "smooth"
    });    
    
});