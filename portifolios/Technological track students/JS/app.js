const mobilebtn = document.getElementById("open");
const mobilebtnExit = document.getElementById("close");
const nav = document.querySelector("nav");

mobilebtn.addEventListener('click',() =>{
    nav.classList.add('active');
})
mobilebtnExit.addEventListener('click',() =>{
    nav.classList.remove('active');
})