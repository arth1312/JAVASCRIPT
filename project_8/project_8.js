
let targetDate = new Date("2025-12-13T23:59:59");

function Countdown() {
    let currentDate = new Date();
    let birthday_time = targetDate - currentDate;

    if (birthday_time <= 0) {
        document.querySelector(".day h2").innerHTML= "0";
        document.querySelector(".hours h2").innerHTML = "0";
        document.querySelector(".min h2").innerHTML = "0";
        document.querySelector(".secound h2").innerHTML = "0";
        clearInterval(countdownInterval); 
        
        return;
    }

    let days = Math.floor(birthday_time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((birthday_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((birthday_time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((birthday_time % (1000 * 60)) / 1000);

    document.querySelector(".day h2").innerHTML = days;
    document.querySelector(".hours h2").innerHTML = hours;
    document.querySelector(".min h2").innerHTML = minutes;
    document.querySelector(".secound h2").innerHTML = seconds;
}


let countdownInterval = setInterval(Countdown, 1000);
Countdown();