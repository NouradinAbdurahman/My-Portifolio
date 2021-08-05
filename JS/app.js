const mobilebtn = document.getElementById("mobile-cta")
const nav = document.querySelector('.navbar')
const mobilebtnExit = document.getElementById('mobile-exit');

// Function
mobilebtn.addEventListener('click',() =>{
    nav.classList.add('menu-btn');
})
mobilebtnExit.addEventListener('click',() =>{
    nav.classList.remove('menu-btn');
})