
const div = document.querySelector(".counter-area")
let counter = 0;
div.textContent = counter;

const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click",function(){    
    click = setInterval(() => {
    div.textContent = counter++;
}, 0.20);
})

resetBtn.addEventListener("click",function(){
    clearInterval(click)
    counter = 0; 
   div.textContent = counter;
})

stopBtn.addEventListener("click",function(){
   clearInterval(click)
})

