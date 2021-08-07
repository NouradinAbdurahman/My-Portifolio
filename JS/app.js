// Mobile Navbar
const mobilebtn = document.getElementById("mobile-cta")
const nav = document.querySelector('.navbar')
const mobilebtnExit = document.getElementById('mobile-exit');
mobilebtn.addEventListener('click',() =>{
    nav.classList.add('menu-btn');
})
mobilebtnExit.addEventListener('click',() =>{
    nav.classList.remove('menu-btn');
})


// Scroll To Tup
const btnScrollToTup = document.querySelector(".scrollUp");
btnScrollToTup.addEventListener("click",() => {
    window.scrollTo ({
        top:0,
        left:0,
        behavior: "smooth"
    })    
})