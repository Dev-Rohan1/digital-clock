let hour = document.querySelector(".hour p");
let min = document.querySelector(".min p");
let sec = document.querySelector(".sec p");

setInterval(function(){
    let currentTime = new Date();
 
    hour.innerHTML = (currentTime.getHours() < 10 ? "0" : " ") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : " ") + currentTime.getMinutes();;
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : " ") + currentTime.getSeconds();;    
}, 1000);