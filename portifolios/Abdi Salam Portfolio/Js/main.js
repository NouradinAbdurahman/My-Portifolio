// Sticky Navigation Bar On Scroll
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
});


window.addEventListener("scroll",function(){
    var socialSite = document.querySelector(".social-site");
    socialSite.classList.toggle("change",window.scrollY > 300)
});


// Menu Bar
var showAndClose = document.querySelector(".navBar");
function toggleShow() {
    showAndClose.style.visibility = "visible"
    showAndClose.style.opacity = "1"
};
function toggleClose() {
    showAndClose.style.visibility = "hidden"
    showAndClose.style.opacity = "0"
};